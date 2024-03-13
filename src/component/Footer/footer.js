import React from "react";
import "./footer.css";
import img1 from "../img/download.svg";
import img2 from "../img/download (1).svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="container footer row m-5 p-5">
      <div className="col">
        <ul>
          <h4>Company</h4>
          <li>About Us</li>
          <li>jobs</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <h4>Help</h4>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <h4>Legal</h4>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="col">
        <img src={img1} alt="" className="img-fluid" />
        <img src={img2} alt="" className="img-fluid" />
      </div>
      <div className="col">
        <div className="d-flex"style={{ fontSize: 50, gap: 20}}>
          <FaTwitter />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default footer;
