import firebase_app from "../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email, password, name) {
    console.log(email, password, name);
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password, name);
    } catch (e) {
        error = e;
    }

    return { result, error };
}