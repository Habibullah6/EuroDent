import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()

const useFirebase = () => {
const [user, setUser] = useState({})
const auth = getAuth();
const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result => {
       const user = result.user;
       setUser(user);
       console.log(user);
    })
    .catch(error =>{
      alert(error.message)
    })
}

useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    if(user){
      setUser(user)
    }
    else{
      setUser({})
    }
  })
},[])

const handleEmailPasswordRegister = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

const handleEmailPasswordLogin = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password)
}

const handleEmailVerify = () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    alert('email verification send')
  });
}




const handleSignOut = () => {
    signOut(auth)
    .then(()=> {
      setUser('')
    })
    .catch({

    })
}







return {
    user, 
    handleGoogleSignIn,
    handleEmailPasswordRegister,
    handleSignOut,
    handleEmailVerify,
    handleEmailPasswordLogin,
    auth,
    updateProfile,
    setUser
}
}

export default useFirebase;