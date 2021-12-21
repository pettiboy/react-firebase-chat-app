import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Utils/Logout/Logout";
import { auth } from "../config/firebase";

interface Props {}

const Chats = (props: Props) => {
  return (
    <div>
      Chats Screen
      <Logout />
    </div>
  );
};

export default Chats;
