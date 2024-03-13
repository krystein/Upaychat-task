import React from "react";
import "./footer.css";
import img1 from "../img/download.svg";
import img2 from "../img/download (1).svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer row">
      <div className="col-md">
        <ul>
          <h4>Company</h4>
          <li>About Us</li>
          <li>jobs</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="col-md">
        <ul>
          <h4>Help</h4>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="col-md">
        <ul>
          <h4>Legal</h4>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="col-md">
        <ul>
          <li>
            <img src={img1} alt="" className="img-fluid" width="100" />
          </li>
          <li>
            <img src={img2} alt="" className="img-fluid" width="110" />
          </li>
        </ul>
      </div>
      <div className="col-md">
        <div className="d-flex" style={{ fontSize: 50, gap: 20 }}>
          <ul className="d-flex">
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
