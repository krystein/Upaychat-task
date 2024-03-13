import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import img from "./img/phone.25262f22bc2e0134d5d5.png";
import img1 from "./img/download.svg";
import img2 from "./img/download (1).svg";

const Herosection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center
`;

const Hero = () => {
  return (
    <Herosection className="container">
        <div className="row align-items-center">
        <div className="col-5 col-s">
          <h1 className="text-center">Quick, Safe way to send and receive social payments online.</h1>
          <h4 className="text-center">Download the app</h4>
          <div className="row justify-content-center">
            <img src={img1} alt="" className="img-fluid col-3" width="50"/>
            <img src={img2} alt="" className="img-fluid col-3"/>
          </div>
        </div>
        <div className="col col-sm">
          <img src={img} alt="" className="img-fluid" />
        </div>
        </div>
    </Herosection>
  );
};

export default Hero;
