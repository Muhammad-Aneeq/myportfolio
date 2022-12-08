import React, { useState, useContext } from "react";
import styled from "styled-components";
import InputField from "./components/InputField";
import login from "./images/login.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";

const Login = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("login Successfull ");
      navigate("/");
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="sign-up-image">
            <figure>
              <img src={login} alt="signinpic" />
            </figure>
            <NavLink to="/signup">Create an Account</NavLink>
          </div>
          <form method="POST" id="register-form">
            <h2>Sign in</h2>
            <InputField
              className="input"
              id="email"
              label="Your Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              className="input"
              id="password"
              label="Your Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="signin-btn">
              <input
                type="submit"
                name="signin"
                id="signin"
                onClick={loginUser}
              />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 120rem;
    margin: 6% auto;
    padding: 0 15%;
    margin-bottom: 1%;
  }

  .grid {
    display: grid;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 20px;
    padding: 15% 10%;
    padding-top: 10%;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;

    &:hover {
      font-weight: 600;
    }
  }
  .signin-btn {
    input[type="submit"] {
      border: none;
      padding: 10px 20px;
      font-weight: 700;
      margin-top: 20px;
      cursor: pointer;
      &:hover {
        transform: scale(0.9);
      }
    }
  }

  .desktop-show {
    display: flex !important;
  }
  .mobile-show {
    display: none !important;
  }

  @media (max-width: 768.8px) {
    .container {
      margin: 20% auto;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      padding: 5% 10%;
    }
  }

  .sign-up-image {
    width: 100%;
    margin: auto;
    text-align: center;

    figure {
      text-align: center;
    }
  }
  form {
    width: 100%;
  }

  .mobile-show {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .desktop-show {
    display: none;
  }
  .input {
    margin: 0;
  }
`;
export default Login;
