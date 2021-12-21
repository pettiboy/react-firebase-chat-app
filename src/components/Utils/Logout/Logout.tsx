import React, { useState } from "react";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

interface Props {}

const Logout = (props: Props) => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setDisabled(true);
    signOut(auth)
      .then(() => {
        navigate("/login");
        setDisabled(false);
      })
      .catch((error) => {
        console.log(error);
        setDisabled(false);
      });
  };

  return (
    <div>
      <Button disabled={disabled} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
