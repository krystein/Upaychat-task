import React, { useState } from "react";
//import components
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Img1 from "../img/download.png";
import "./navbar.css";

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-family: inter, sans-serif;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #4ee54a;
  h1 {
    &:hover {
      transform: scale(1.05);
    }
    font-size: clamp(1rem, 8vw, 1.2rem);
    cursor: pointer;
  }
`;

const MenuBar = styled(FaBars)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #4ee54a;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
`;
const NavMenuLink = styled.div`
  cursor: pointer;
  color: #777777;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
:hover{
    color: #4ee54a;
}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    border-radius: 20px;
    height: 40px;
    width: 100px;
    color: #777777;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 400;
    user-select: none;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  div {
    margin-right: 30px;
  }
  .img {
    width: 20px;
  }
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
`;

const Navbar = ({ toggle, menuData }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <>
      <nav className={colorChange ? "Itump active" : "Itump active"}>
        <Logo>
          <img src={Img1} alt="" className="img-fluid" width="50" />
          <h2 className="m-0">UpayChat</h2>
        </Logo>
        <MenuBar onClick={toggle} />
        <div className="mx-5" style={{ display: "flex", gap: "50px" }}>
          <NavMenu>
            {menuData.map((item, index) => {
              return (
                <NavMenuLink
                  key={index}
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={() => toggleDropdown(index)}>
                  {item.title}
                  {openDropdownIndex === index && (
            <div className="dropdown-content">
              {item.option.map((option, optionIndex) => (
                <a key={optionIndex} href="/#">{option}</a>
              ))}
              </div>
                  )}
                </NavMenuLink>
              );
            })}
          </NavMenu>
        </div>
        <NavBtn>
          <button>Log in</button>
          <button>Register</button>
        </NavBtn>
      </nav>
    </>
  );
};

export default Navbar;
