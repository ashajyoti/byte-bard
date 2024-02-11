import firebase_app from "../firebaseConfig";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export async function getDoument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getAllDoument(coll) {
    let docRef = collection(db, coll);

    let result = null;
    let error = null;
    const documents = [];
    try {
        result = await getDocs(docRef);


        result.forEach((doc) => {
            documents.push({
                id: doc.id,
                data: doc.data()
            });
        });


    } catch (e) {
        error = e;
    }

    return { documents, error };
}

export async function getDoumentById(postId) {
    let docRef = collection(db, "blog");

    let result = null;
    let error = null;
    let document;
    try {
        result = await getDocs(docRef);
        console.log('rrr===>', result);
        document = result.filter(item => {
            let data = item.data()
            console.log('===>', data, result);
            return data.slug === postId
        })

    } catch (e) {
        error = e;
    }

    return { document, error };
}