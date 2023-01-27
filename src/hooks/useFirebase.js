import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()

const useFirebase = () => {
const [user, setUser] = useState({})
const [loading, setLoading] = useState(true);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const handleGoogleSignIn = () => {
   setLoading(true)
   return signInWithPopup(auth, googleProvider)
 
}



useEffect(()=>{
setLoading(true)
  onAuthStateChanged(auth, (user)=>{
    if(user){
      
      setUser(user)
      setLoading(false)
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
    setUser,
    loading,
    
}
}

export default useFirebase;