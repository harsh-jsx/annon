import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log("Logged in");
  };
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login with google</button>
    </>
  );
};

export default Login;
