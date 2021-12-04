import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    isDarkMode: boolean
}

const initialState: InitialState = {
    isDarkMode: false,
}

export const portfolioSlice = createSlice({
    name: 'portfoliostate',
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
})
export const { setDarkMode } = portfolioSlice.actions;
export default portfolioSlice.reducer