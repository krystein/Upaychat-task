import React from "react";
//import components
import styled from "styled-components";
import { FaGreaterThan, FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70vh;
  background: #fff;
  display: grid;
  align-items: center;
  top: ${({ open }) => (open ? "0" : "-110%")};
  bottom: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ open }) => (open ? "1" : "0")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cusrsor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-gap: 5px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CloseIcon = styled(FaTimes)`
  color: #4ee54a;
`;

const DropdownLink = styled.div`
  display: flex;
  color: #777777;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-family: inter, sans-serif;
  text-decoration: none;
  text-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 1rem;
  padding: 0px 30px;
  &:hover {
    color: #4ee54a;
  }
`;

const BtnWarp = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  button {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 8px;
    height: 40px;
    width: 200px;
    color: #77777;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 400;
    user-select: none;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      background: ##4ee54a;
      transform: scale(1.05);
      border: #4ee54a;
      color: #fff;
      font-weight: 800;
    }
  }
`;

const Dropdown = ({ open, toggle, menuData }) => {
  return (
    <DropdownContainer open={open}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <div key={index} style={{ textDecoration: "none" }}>
                <DropdownLink onClick={toggle}>
                  {item.title} <FaGreaterThan style={{ fontSize: "14px" }} />
                </DropdownLink>
              </div>
            );
          })}
        </DropdownMenu>
        <BtnWarp>
          <div >
            <button className="btn-light">Log in</button>
          </div>
        </BtnWarp>
        <BtnWarp>
          <div >
            <button className="btn-light">Register</button>
          </div>
        </BtnWarp>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
