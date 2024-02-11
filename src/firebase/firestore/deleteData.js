import firebase_app from "../firebaseConfig";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

//Delete data to firestore database
const db = getFirestore(firebase_app)
export default async function deleteBlog(id) {
    console.log('kar delete bhai',id);
    let result = null;
    let error = null;

    try {
        result = await deleteDoc(doc(db, "blog", id.id));

    } catch (e) {
        error = e;
    }

    return { result, error };
}