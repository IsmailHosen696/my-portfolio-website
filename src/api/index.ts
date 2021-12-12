import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { firestore } from "../db/firebase";
import { projectType } from "../types";

export const addProjectToFirebase = async (project: projectType) => {
    await setDoc(doc(firestore, "projects", project.id), project);
}
export async function allProjectsFromFirbase() {
    const nameCollection = collection(firestore, 'projects');
    const collectionSnap = await getDocs(nameCollection);
    const collectionList = collectionSnap.docs.map(doc => ({ ...doc.data() }) as projectType);
    return collectionList;
}

export async function deleteFirebaseProject(id: string) {
    const deleteRef = await doc(firestore, 'projects', id);
    await deleteDoc(deleteRef);
}
export const updateFirebaseNote = async (nproject: projectType) => {
    const projectRef = doc(firestore, 'projects', nproject.id);
    await setDoc(projectRef, nproject, { merge: true });
}

export async function findProjectWithId(id: string) {
    const nameCollection = query(collection(firestore, 'projects'), where('id', '==', id));
    const collectionSnap = await getDocs(nameCollection);
    const collectionList = collectionSnap.docs.map(doc => doc.data() as projectType);
    return collectionList;
}
