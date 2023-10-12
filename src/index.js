import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Nav from './nav/nav';
import Comp2 from './Comp2/Comp2';
import Cards from './cards/Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Comp2/>
    <Cards/>

  </React.StrictMode>
);


