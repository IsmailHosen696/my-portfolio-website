import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";
import { auth, storage } from "../db/firebase";
import { projectType, userType } from "../types";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { allProjectsFromFirbase } from "../api";
import { FirebaseError } from "firebase/app";

export interface AuthContextType {
    logout: () => Promise<void>;
    user: userType | null;
    imageUrlMaker: (file: any) => Promise<unknown>;
    project: projectType[]
}

const AuthContexts = createContext({} as AuthContextType);

export const useAuth = () => {
    return useContext(AuthContexts);
}

export default function AuthProvider(props: { children: any }) {
    const getAuth = auth;
    const [user, setUser] = useState<userType | null>(null);
    const [project, setProject] = useState<projectType[]>([]);
    useEffect(() => {
        onAuthStateChanged(getAuth, (data) => {
            if (data) {
                const res: userType = {
                    uid: data?.uid,
                    displayName: data?.displayName as string,
                    email: data?.email as string,
                    photoURL: data?.photoURL,
                    isAdmin: data?.email === process.env.REACT_APP_ADMIN_EMAIL ? true : false
                }
                setUser(res);
            } else {
                return setUser(null)
            }
        })
    }, [getAuth]);

    async function logout() {
        return signOut(getAuth)
    }

    const imageUrlMaker = async (file: any) => {
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
                (snapshot) => { },
                (error) => {
                    reject(error.message)
                },
                () =>
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
                        resolve(downloadURL);
                    })
            )
        })
    }
    const allProjects = async () => {
        await allProjectsFromFirbase().then((data) => {
            setProject(data);
        }).catch((err: FirebaseError) => {
            console.log(err.message);
        })
    }
    useEffect(() => {
        allProjects()
    }, [project]);

    const value = {
        logout,
        user,
        imageUrlMaker,
        project
    }
    return (
        <AuthContexts.Provider value={value}>
            {props.children}
        </AuthContexts.Provider>
    )
}
