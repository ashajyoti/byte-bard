import firebase_app from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email, password, name) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password, name);
    await updateProfile(auth.currentUser, { displayName: name }).catch(
      (error) => console.log(error)
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}
