import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkIfEmptyOject } from "./utils/utils";
import Routes from "./Routes";
import "./App.css";

function App() {
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.currentUser);

  useEffect(() => {
    if (checkIfEmptyOject(currentUser)) {
      history.push("/login");
    } else {
      history.push("/home/adminformats");
    }
  });

  return (
    <Routes />
  );
}

export default App;
