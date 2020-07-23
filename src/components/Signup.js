import React, { useState } from "react";
import { signupPost } from "../services/loginServices";
import { useHistory } from "react-router-dom";
import logo from "../assets/blacklogo.png";

const Signup = () => {
  const history = useHistory();
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    signupPost(state)
      .then((response) => {
        alert("User created successfully!");
        history.push("/login");
      })
      .catch((reason) =>
        alert(
          `An error ocurred, verify your data and that you hasn't used the same email before.`
        )
      );
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <div style={{ display: "flex", backgroundColor: "black" }}>
      <div
        id="leftMainCol"
        className="
      uk-width-1-2
      uk-height-small uk-panel
      uk-height-viewport 
      uk-flex 
      uk-flex-center 
      uk-flex-middle"
      >
        <div
          id="leftColCardAndGrid"
          className="uk-card uk-card-default uk-card-body uk-height-1-1"
          uk-grid="true"
        >
          <form className="uk-form-stacked" onSubmit={handleSubmit}>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="name">
                First Name
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="name"
                  type="text"
                  placeholder="Your first name..."
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="lastName">
                Last Name
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="lastName"
                  type="text"
                  placeholder="Your last name..."
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="email">
                Email
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="email"
                  type="text"
                  placeholder="Your email address..."
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="password">
                Password
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="password"
                  type="password"
                  placeholder="Password..."
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-form-controls">
                <button className="uk-button uk-button-primary">
                  {" "}
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        id="leftMainCol"
        className="
      uk-width-1-2
      uk-height-small uk-panel
      uk-height-viewport 
      uk-flex 
      uk-flex-middle"
      >
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Signup;
