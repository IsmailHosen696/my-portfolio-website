import { Timestamp } from "firebase/firestore";

export type userType = {
    uid: string | undefined,
    displayName: string | undefined,
    email: string | undefined,
    photoURL?: string | null,
    isAdmin: boolean
}
export interface projectType {
    id: string;
    headline: string;
    description: string
    projectProfile: string,
    timestamp: string,
    hostedURL: string | undefined,
    gitRepoURL: string
}