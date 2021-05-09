import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    //do the register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Create a user and logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="logo__img"
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <form className="login__form">
        <h3 className="login__title">Sign in</h3>
        <div className="login__email">
          <label>Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          ></input>
        </div>
        <div className="login__password">
          <label>Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
        </div>
        <button onClick={login} type="submit" className="signIn__btn">
          Sign in
        </button>
        <small className="privacy__text">
          By signing-in your gree to Amazons`s Conditions of Use & Sale. Please
          see our privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </small>
        <button className="createAcc__btn">Create your Amazon Account</button>
      </form>
    </div>
  );
}

export default Login;
