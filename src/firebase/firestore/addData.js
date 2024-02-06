import firebase_app from "../firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";

//Add data to firestore database
const db = getFirestore(firebase_app)
export default async function addData(colllection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}