import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, Providers } from "../../config/firebase";
import Button from "../UI/Button";

interface Props {}

const AuthContainer = (props: Props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, Providers.google)
      .then(() => {
        navigate("/chats");
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
      <Button title="Login With Google" onClick={signInWithGoogle} />
      {user && <Button title="Logout" onClick={logout} />}
      <p>{errorMessage}</p>
    </div>
  );
};

export default AuthContainer;
