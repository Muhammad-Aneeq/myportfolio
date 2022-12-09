import React, { useEffect, useState } from "react";
import styled from "styled-components";
import mern2 from "./images/mern4.jpg";

const Home = () => {
  const [userName, setUserName] = useState("");
  const userHome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("data", data);
      setUserName(data.name);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("working");
    userHome();
    console.log(userName);
  }, []);
  return (
    <Wrapper>
      <figure>
        <img src={mern2} alt="mernstack" />
      </figure>
      <h5>Welcome</h5>
      <h1>{userName}</h1>
      <h3> I am mern stack developer looking for great opportunities</h3>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 249, 250);

  h1 {
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
  }
  h2 {
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  }
  h5 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  img {
    img {
      max-width: 100%;
    }
  }

  @media (max-width: 768.8px) {
    h1 {
      text-transform: uppercase;
      font-size: 25px;
      font-weight: 700;
      text-align: center;
      padding: 0 10%;
    }
    h2 {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      padding: 0 10%;
    },
    h3{
      text-align: center;
      font-size: 18px;
    }
    figure {
      text-align: center;
    }
  }
`;
export default Home;
