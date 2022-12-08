import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log("data", data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log("error", error);
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log("data");
    console.log("running");
    callAboutPage();
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="header-info">
          <h1>ANEEQUE KHATRI</h1>
          <div>
            <h6 className="info">
              <span>D.O.B: 13/07/2003</span>
              <span>Email:aneeqabdulsamad5761@gmail.com</span>
              <span>Contact:0307-2485736</span>
            </h6>
          </div>
        </div>
        <div className="objectives">
          <h3>OBJECTIVES</h3>
          <p>
            To gain confidence and fame using my potential in the field of
            "Frontend Development",and express my innovative creative skills for
            self and company growth,
          </p>
        </div>
        <div className="grid grid-three-column">
          <div className="sec-1">
            <div className="qualifications">
              <h3>qualifications</h3>
              <h5>web 3.0 & metaverse</h5>
              <p>piaic (present)</p>
              <h5>mern stack development course</h5>
              <p>jawan pakistan (present)</p>
              <h5>intermediate</h5>
              <p>govt.college of commerce and economics (2022)</p>
              <h5>matriculation</h5>
              <p>tayyab ali boys secondary school</p>
            </div>
          </div>
          <div className="sec-2">
            <div className="skills">
              <h3>skills</h3>
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>javascript</p>
              <p>typescript</p>
              <p>react js</p>
              <p>react native</p>
              <p>node js</p>
              <p>express js</p>
              <p>mongo db</p>
            </div>
          </div>
          <div className="sec-3">
            <div className="languages">
              <h3>langauages</h3>
              <p>english</p>
              <p>urdu</p>
            </div>

            <div className="interests">
              <h3>interests</h3>
              <p>reading</p>
              <p>cyber surfing</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  body {
    overflow-y: hidden;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  .container {
    width: 80%;
    margin: 2% auto;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 20px;
    padding: 2% 10%;
    ${"" /* padding-bottom: 1%; */}
    overflow:hidden;
  }

  .grid {
    display: grid;
    padding-top: 5%;
    gap: 5%;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);

    p {
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    text-align: center;
  }
  .sec-2 {
    margin-left: 40px;
    p {
      font-weight: 600;
    }
  }
  h1 {
    font-weight: 700;
  }
  h3 {
    text-transform: capitalize;
    text-decoration: underline;
    font-weight: 600;
  }
  h5 {
    text-transform: capitalize;
    margin-bottom: 0;
    margin-top: 10px;
    font-weight: 600;
  }
  h6 {
    font-weight: 600;
  }

  @media (max-width: 768.8px) {
    .container {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        font-size: 80%;
      }
    }

    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
    }
    .sec-2 {
      margin-left: 0;
    }
    .sec-3 {
      display: none;
    }
  }

  @media (max-width: 480.8px) {
    .container {
      margin-top: 10%;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        font-size: 50%;
      }
    }
    .header-info {
      h1 {
        font-size: 80%;
      }
    }
  }
`;
export default About;
