import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

interface Props {}

const Home = (props: Props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    redirect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const redirect = () => {
    if (user) {
      navigate("/chats");
    } else {
      navigate("/login");
    }
  };

  return <div></div>;
};

export default Home;
