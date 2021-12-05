import { signInWithEmailAndPassword, signOut, updateProfile, UserCredential } from "firebase/auth";
import { useContext, createContext } from "react";
import { auth } from "../db/firebase";

export interface AuthContextType {
    signin: (email: string, password: string) => Promise<UserCredential>
    signup: (email: string, password: string, username: string) => Promise<void>
    logout: () => Promise<void>;
}

const AuthContexts = createContext({} as AuthContextType);

export const useAuth = () => {
    return useContext(AuthContexts);
}

export default function AuthProvider(props: { children: any }) {
    const getAuth = auth;

    async function signin(email: string, password: string) {
        return signInWithEmailAndPassword(getAuth, email, password)
    }
    async function signup(email: string, password: string, username: string) {
        return signInWithEmailAndPassword(getAuth, email, password).then((user) => {
            updateProfile(user.user, { displayName: username });
        })
    }
    async function logout() {
        return signOut(getAuth);
    }
    const value = {
        signin,
        signup,
        logout
    }
    return (
        <AuthContexts.Provider value={value}>
            {props.children}
        </AuthContexts.Provider>
    )
}
