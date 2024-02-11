import firebase_app from "../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function userSignOut(e) {
    e.preventDefault();
    await signOut(auth).then(() => {
    }).catch((error) => {
        console.log(error);
    });
}