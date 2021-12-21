import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

interface Props {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
    return () => {};
  }, []);

  return <>{children}</>;
};

export default AuthChecker;
