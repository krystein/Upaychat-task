import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CardSection from './component/cardSection';
import mockData from './data/mockData';
import GlobalStyle from "./globalstyles";

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <CardSection cards={mockData} />
    </div>
  );
};

export default App;
