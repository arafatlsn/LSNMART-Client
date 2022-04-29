import React from 'react';
import auth from './Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const useFirebase = () => {
  // sign in with google 
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // signout 
  const userSignOut = () => {
    signOut(auth)
  }

  return { signInWithGoogle, userSignOut }
};

export default useFirebase;