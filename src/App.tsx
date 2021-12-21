import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Center from "./components/Utils/Center/Center";
import { auth } from "./config/firebase";
import routes from "./config/routes";
import AuthContainer from "./components/AuthContainer/AuthContainer";
import AuthChecker from "./components/Utils/AuthChecker/AuthChecker";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.info("User detected.");
      } else {
        console.info("No user detected");
      }
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Center>
        <CircularProgress />
      </Center>
    );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
