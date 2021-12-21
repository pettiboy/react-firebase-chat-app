import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { auth, Providers } from "../config/firebase";

interface Props {}

const Home = (props: Props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, Providers.google)
      .then(() => {
        // navigate("/chats");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ": " + errorMessage);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <Button title="Logout" onClick={logout} />
        </div>
      ) : (
        <>
          <Button title="Login With Google" onClick={signInWithGoogle} />
          <p>{errorMessage}</p>
        </>
      )}
    </div>
  );
};

export default Home;
