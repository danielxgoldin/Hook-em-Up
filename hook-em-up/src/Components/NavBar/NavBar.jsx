import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// importing react.js

// calls the navbar

var navBar = ({}) => {
  return (
    <nav className="navbar navbar-dark">
      {/* navbar title  */}

      <a href="/" className="navbar-title">
        Hook Em Up
      </a>
      {/* website title that links back to the home page */}

      <div id="navbar" className="navbar-collapse">
        <ul>
          {/* All the pages, clickable titles that link to them  */}
          <Routes>
            <li className="navTitle">
              <Route to="/items">
                <p>Items</p>
              </Route>
            </li>
            <li className="navTitle">
              <Route to="/login">
                <p>Login</p>
              </Route>
            </li>
            <li className="navTitle">
              <Route to="/cart">
                <p>Cart</p>
              </Route>
            </li>
            <li className="navTitle">
              <Route to="/transactions">
                <p>Transactions</p>
              </Route>
            </li>
          </Routes>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;
