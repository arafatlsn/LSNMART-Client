import React from 'react';
import auth from './Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const useFirebase = () => {
  // create account with email pass 
  const [
    createUserWithEmailAndPassword,
    userCreateEmailPass,
    loadingCreateEmailPass,
    errorCreateEmailPass,
  ] = useCreateUserWithEmailAndPassword(auth);
  // sign in with google 
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // signout 
  const userSignOut = () => {
    signOut(auth)
  }

  return { signInWithGoogle, userSignOut, createUserWithEmailAndPassword }
};

export default useFirebase;