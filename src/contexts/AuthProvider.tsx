import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../db/firebase";
import { userType } from "../types";

export interface AuthContextType {
    logout: () => Promise<void>;
    user: userType | null;
}

const AuthContexts = createContext({} as AuthContextType);

export const useAuth = () => {
    return useContext(AuthContexts);
}

export default function AuthProvider(props: { children: any }) {
    const getAuth = auth;
    const [user, setUser] = useState<userType | null>(null);

    useEffect(() => {
        onAuthStateChanged(getAuth, (data) => {
            if (data) {
                const res: userType = {
                    uid: data?.uid,
                    displayName: data?.displayName as string,
                    email: data?.email as string,
                    photoURL: data?.photoURL,
                    isAdmin: data?.email === process.env.ADMIN_EMAIL ? true : false
                }
                setUser(res);
            } else {
                return setUser(null)
            }
        })
    });
    async function logout() {
        return signOut(getAuth)
    }
    const value = {
        logout,
        user
    }
    return (
        <AuthContexts.Provider value={value}>
            {props.children}
        </AuthContexts.Provider>
    )
}
