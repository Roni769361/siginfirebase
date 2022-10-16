
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBbZ63qKDNoxWt6t15WlbKw6wuRPABgvYU",
  authDomain: "ema-john-simple-93236.firebaseapp.com",
  projectId: "ema-john-simple-93236",
  storageBucket: "ema-john-simple-93236.appspot.com",
  messagingSenderId: "136536148814",
  appId: "1:136536148814:web:5be096440a94dc40e32c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const signInwithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log(result)
    }).catch(error => console.log(error))
}
