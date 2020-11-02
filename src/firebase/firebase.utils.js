import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmgpXqqi-1cThtVVnQMr1_GOMlkZydM48",
    authDomain: "crown-db-f9a19.firebaseapp.com",
    databaseURL: "https://crown-db-f9a19.firebaseio.com",
    projectId: "crown-db-f9a19",
    storageBucket: "crown-db-f9a19.appspot.com",
    messagingSenderId: "850596978878",
    appId: "1:850596978878:web:fa199505f65de8b85bfeef",
    measurementId: "G-FXJVB8GPCT"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;