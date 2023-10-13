import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Joinus from './Joinus';
import Login from './Login';
import SignUp from './Signup';
import Nav from './Nav/N';
import Tv from './movie/Tv';
import TVD from './movie/TVD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/TVD/:id" element={<TVD/>} />
        <Route path="/Join" element={<Joinus />}>
          <Route path="" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
