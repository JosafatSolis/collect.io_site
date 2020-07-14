import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import { checkIfEmptyOject } from "../utils/utils";
import { login } from "../services/loginServices";

let logo = require("../assets/whitelogo.png");
let background = require("../assets/loginbackground.svg");

const BackgroundSection = styled.section`
  background-attachment: fixed;
  background-size: cover;
`;

const Login = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.currentUser);

  if (!checkIfEmptyOject(currentUser)) {
    history.push("/home");
  }

  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    console.log(credentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Se extrae el método setUser del AppContext
    const { setUser } = this.context;
    const { credentials } = this.state;
    const { history } = this.props;
    // Mandamos llamar el servicio que regresa una promesa, que a su vez regrea un objeto res.data con el user dentro
    login(credentials)
      .then((res) => {
        // Extrae el usuario y lo asigna al context, mediante el método setUser
        const { user } = res.data;
        setUser(user);
        // Cambia la página dependiendo del rol del usuario logueado:
        if (["Admin", "Tecnician"].includes(user.role)) {
          history.push("home/tenants");
        } else {
          history.push(`home/tickets/${user.tenant._id}`);
        }
      })
      .catch((reason) => console.log("Error", reason));
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
                >
                  {" "}
                </span>
                <input
                  name="password"
                  onChange={handleChange}
                  className="uk-margin-small-top uk-width-1-2 uk-form-large uk-text-center"
                  type="password"
                  placeholder="Password"
                  style={{ border: "solid 2px #f07e1c" }}
                ></input>
              </div>

              {/* LOGIN BUTTON */}
              <div className=" uk-align-center ">
                <button
                  className=" uk-align-center uk-button uk-button-primary"
                  style={{ backgroundColor: "#f07e1c" }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-large-left">
           <span>New user? <Link to="/signup">Create an account</Link></span>
          </div>
        </article>
      </BackgroundSection>
    </main>
  );
};

export default Login;
