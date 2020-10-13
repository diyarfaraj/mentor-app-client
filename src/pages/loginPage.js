import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CustomButton from "../components/custom-button/custom-button-component";
import FormInput from "../components/form-input/formInput-component";

//todo: create link to this page
const LoginPage = () => {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, password);
    //usernameSignInStart(username, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your username and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="username"
          name="username"
          handleChange={handleChange}
          value={username}
          label="username"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sing In</CustomButton>
          <CustomButton
            type="button"
            onClick={console.log("hejhej")}
            isGoogleSignIn
          >
            {" "}
            Sing In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
