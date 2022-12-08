import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import InputField from "./components/InputField";
import signuppic from "./images/signuppic.jpg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, password, cpassword }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registeration");
      console.log("Invalid Registeration");
    } else {
      window.alert("Registeration Succesfull");
      navigate("/login");
    }
  };
  console.log(user);
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="signup-form ">
            <h2>Sign Up</h2>
            <form method="POST" id="register-form">
              <InputField
                className="input"
                id="name"
                label="Your Name"
                name="name"
                type="text"
                value={user.name}
                onChange={handleInputs}
              />
              <InputField
                className="input"
                id="email"
                label="Your Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputs}
              />
              <InputField
                className="input"
                id="phone"
                label="Your Phone Number"
                name="phone"
                type="text"
                value={user.phone}
                onChange={handleInputs}
              />
              <InputField
                className="input"
                id="password"
                label="Your Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleInputs}
              />
              <InputField
                className="input"
                id="cpassword"
                label="Confirm Password"
                name="cpassword"
                type="password"
                value={user.cpassword}
                onChange={handleInputs}
              />

              <div className="signup-btn">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  onClick={postData}
                />
              </div>
              <NavLink to="/login" className="mobile-show">
                I am already Registered
              </NavLink>
            </form>
          </div>
          <div className="sign-up-image">
            <figure>
              <img src={signuppic} alt="signuppic" />
            </figure>
            <NavLink to="/login" className="desktop-show">
              I am already Registered
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 120rem;
    margin: 5% auto;
    padding: 0 15%;
    margin-bottom: 1%;
  }

  .grid {
    display: grid;
    padding: 10%;
    padding-top: 5%;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 20px;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .signup-form {
    order: 1;
    -webkit-order: 1;
    -ms-flex-order: 1;
  }

  .sign-up-image {
    order: 2;
    -webkit-order: 2;
    -ms-flex-order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;

    &:hover {
      font-weight: 600;
    }
  }
  .signup-btn {
    input[type="submit"] {
      border: none;
      padding: 10px 20px;
      font-weight: 700;
      margin-top: 10px;
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
      margin: 5% auto;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      padding: 5% 10%;
    }
  }
  .signup-form {
    order: 2;
    width: 100%;
    margin-top: 25px;
  }

  .sign-up-image {
    order: 1;
    margin: auto;
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
export default Signup;
