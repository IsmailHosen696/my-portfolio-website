import { createContext, useContext, useEffect, useReducer } from "react";
import { Actions, THEME_KEY } from "../constants";

export type PortfolioContextType = {
    darkMode: boolean;
};
export const PortfolioContext = createContext<{
    state: PortfolioContextType;
    dispatch: React.Dispatch<PortfolioContextActionType>;
} | null>(null);

type DarkModeToggleActionType = {
    type: Actions.TOOGLE_DARK_MODE;
};

type PortfolioContextActionType =
    | DarkModeToggleActionType

export const reducer = (
    state: PortfolioContextType,
    action: PortfolioContextActionType
): PortfolioContextType => {
    switch (action.type) {
        case Actions.TOOGLE_DARK_MODE:
            return { ...state, darkMode: !state.darkMode };
        default:
            return state;
    }
};
export const PortfolioProvider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(reducer, {
        darkMode: localStorage.getItem(THEME_KEY) ? true : false,
    } as PortfolioContextType);

    useEffect(() => {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem(THEME_KEY);
        if (state.darkMode) {
            localStorage.setItem(THEME_KEY, "dark");
            document.documentElement.classList.add("dark");
        }
    }, [state.darkMode]);
    return (
        <PortfolioContext.Provider value={{ state, dispatch }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error("Context not working!");
    }
    return context;
};
