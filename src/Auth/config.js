// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {collection, getFirestore,getDocs} from "firebase/firestore"

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXqnzv4OKSa_vqczQyOQiQiq8M1MHxVH0",
  authDomain: "twitter-47a6e.firebaseapp.com",
  projectId: "twitter-47a6e",
  storageBucket: "twitter-47a6e.appspot.com",
  messagingSenderId: "257781532151",
  appId: "1:257781532151:web:257f90acf283aaa32a1af2",
  measurementId: "G-071RP7XFDR"
};



// Initialize Firebase
initializeApp(firebaseConfig);
const db =getFirestore();
const colRef = collection(db,'posts')
getDocs(colRef)
.then((snapshot)=>{
  let books=[];
  snapshot.docs.forEach((doc)=>{
    books.push({...doc.data(),id:doc.id})
  
  })
  console.log(books)
}).catch(error=>{
  console.log(error.message)
})
const auth = getAuth();
const provider = new GoogleAuthProvider(); // Note the 'new' keyword here

export { auth, provider,colRef };
