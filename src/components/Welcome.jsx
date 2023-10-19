import React, { useEffect } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { useUserContext } from '../helper/UserContext';
import { onAuthStateChanged } from "firebase/auth";

const Welcome = () => {
  const { user, setUser } = useUserContext();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("auth.currentUser : ", user);
      }
    });

    // Cleanup the listener to avoid memory leaks
    return () => unsubscribe();
  }, [setUser]);


  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={() => {
            googleSignIn()
          }}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
