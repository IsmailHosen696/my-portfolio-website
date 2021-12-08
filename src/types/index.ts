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
    showCase: string
}