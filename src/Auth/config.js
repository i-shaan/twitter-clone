// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {collection, getFirestore,getDocs} from "firebase/firestore"
import { onSnapshot } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
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
let posts = []
getDocs(colRef).then((snapshot)=>{

  snapshot.docs.forEach((doc)=>{
    posts.push({...doc.data(),id:doc.id})
  })
  console.log(posts)

})
const auth = getAuth();
const provider = new GoogleAuthProvider(); // Note the 'new' keyword here

export { auth, provider,colRef,posts,db };
