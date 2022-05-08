import React from 'react';
import auth from './Firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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
  // sign in with email pass 
  const [
    signInWithEmailAndPassword,
    userSignInWithEmailAndPassword,
    loadingSignInWithEmailAndPassword,
    errorSignInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);
  // signout 
  const userSignOut = () => {
    signOut(auth)
  }
  // reset password 
  const [sendPasswordResetEmail, sending, errorResetPassword] = useSendPasswordResetEmail(
    auth
  );
  // sent email verification 
  const [sendEmailVerification, sendingEmailVerification, errorEmailVerification] = useSendEmailVerification(
    auth
  );

  return { signInWithGoogle, userSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, errorSignInWithEmailAndPassword, errorCreateEmailPass }
};

export default useFirebase;