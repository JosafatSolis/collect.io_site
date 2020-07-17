import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, clearErrorMsg } from "../redux/SessionDuck";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import { checkIfEmptyOject } from "../utils/utils";

let logo = require("../assets/whitelogo.png");
let background = require("../assets/loginbackground.svg");

const BackgroundSection = styled.section`
  background-attachment: fixed;
  background-size: cover;
`;

const ErrorMsg = styled.h3`
  color: red;
`;

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser, errorMsg } = useSelector((state) => state.session);

  useEffect(() => {
      if (!checkIfEmptyOject(currentUser)) {
        history.push("/home");
      }
  }, [currentUser, history])

  const [credentials, setCredentials] = useState({});

  const handleFocus = (e) => {
    if (errorMsg) {
      dispatch(clearErrorMsg());
      credentials.password = "";
    }
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <main>
      <BackgroundSection
        style={{ backgroundImage: `url(${background})` }}
        className="
          uk-background-primary  
          uk-height-small uk-panel
          uk-height-viewport 
          uk-flex 
          uk-flex-center 
          uk-flex-middle"
      >
        <article
          className="uk-background-muted "
          style={{
            border: "solid 2px #f07e1c",
            width: "1000px",
            padding: "10px",
          }}
        >
          <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-large-left">
            <img src={logo} alt="company" className="uk-margin" />

            <form
              className="uk-form uk-width-1-2 uk-margin-large-top uk-margin-large-left"
              onSubmit={handleSubmit}
            >
              {/* EMAIL */}
              <span
                uk-icon="icon: users; ratio: 2"
                className="uk-margin-small-right"
              ></span>

              <input
                name="email"
                onChange={handleChange}
                onFocus={handleFocus}
                type="text"
                placeholder="Email"
                className="uk-width-1-2 uk-form-large uk-text-center"
                style={{ border: "solid 2px #f07e1c" }}
              ></input>

              {/* PASSWORD */}
              <div className="uk-form-password">
                <span
                  uk-icon="icon: lock; ratio: 2"
                  className="uk-margin-small-right"
                ></span>

                <input
                  name="password"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  value={credentials.password || ""}
                  className="uk-margin-small-top uk-width-1-2 uk-form-large uk-text-center"
                  type="password"
                  placeholder="Password"
                  style={{ border: "solid 2px #f07e1c" }}
                ></input>
              </div>

              {errorMsg && <ErrorMsg>Login failed! Try again</ErrorMsg>}

              {/* LOGIN BUTTON */}
              <div className=" uk-align-center ">
                <button
                  className="uk-align-center uk-button uk-button-primary"
                  style={{ backgroundColor: "#f07e1c" }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-large-left">
            <span>
              New user? <Link to="/signup">Create an account</Link>
            </span>
          </div>
        </article>
      </BackgroundSection>
    </main>
  );
};

export default Login;
