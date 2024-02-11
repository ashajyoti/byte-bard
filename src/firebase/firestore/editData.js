import firebase_app from "../firebaseConfig";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

//Edit data to firestore database
const db = getFirestore(firebase_app)
export default async function editBlog(body,id) {
    let result = null;
    let error = null;

    try {
        result = await updateDoc(doc(db, "blog", id.id),{
            ...body
        });

    } catch (e) {
        error = e;
    }

    return { result, error };
}