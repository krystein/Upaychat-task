import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardSection from './component/Card/cardSection';
import Navbar from './component/navbar/Navbar';
import Hero from './component/Hero';
import {mockData, menuData, valueData} from './data/mockData';
import GlobalStyle from "./globalstyles";
import Section from './component/Section';
import Value from "./component/Value";
import Footer from './component/Footer/footer';
import Dropdown from './component/Dropdown';

const App = () => {
  const [open, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!open);
  };
  return (
    <div>
      <GlobalStyle/>
      <Navbar menuData={menuData} toggle={toggle}/>
      <Dropdown open={open} toggle={toggle} menuData={menuData} />
      <div>
      <Hero />
      <Section/>
      <CardSection cards={mockData} />
      <Value valueData={valueData}/>
      <Footer/>
      </div>
    </div>
  );
};

export default App;
