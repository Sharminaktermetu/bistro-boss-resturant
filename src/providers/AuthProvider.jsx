import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext =createContext();
const auth =getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true)

    const createUser =(email,password)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
      return  signOut(auth)
    }

    const googleSign =()=>{
      
    return signInWithPopup(auth, provider);
    }
    const updateUser=(name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL:photo
      })
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser =>{
             console.log('auth state change', currentUser);
             setUser(currentUser)
             setLoading(false);

          })
          return ()=>{
            return  unSubscribe();
          }
  },[])

const authInfo={
    user,
    loading,
    createUser,
    updateUser,
    googleSign,
    login,
    logOut
}

    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;