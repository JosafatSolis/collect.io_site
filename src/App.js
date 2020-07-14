import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

function App() {
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.currentUser);

  useEffect(() => {
    console.log(currentUser);
    // Lee el usuario actual y si es nulo, manda al login /
    if (!currentUser) {
      history.push("/login");
    } else {
      // Si el usuario ya existe, manda al home /home
      history.push("/home");
    }
  });

  return (
    <Routes />
  );
}

export default App;
