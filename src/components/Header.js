import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
    <header>
      <ul>
          <li>
              <Link to="home">Home</Link>
          </li>
          <li>
              <Link to="details">Details</Link>
          </li>
      </ul>
    </header>);
  };
export default Header;
