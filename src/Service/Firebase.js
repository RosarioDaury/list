import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB_falz88UFv1rHPFKdtnI7QfLdeXTdsH8",
    authDomain: "todolist-42357.firebaseapp.com",
    projectId: "todolist-42357",
    storageBucket: "todolist-42357.appspot.com",
    messagingSenderId: "77493483284",
    appId: "1:77493483284:web:3cbb437aec4cc8befcb401"
};

firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore();
