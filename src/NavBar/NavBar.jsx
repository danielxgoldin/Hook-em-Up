
import React from "react"
import { Link } from "react-router-dom";
// importing react.js



// calls the navbar

var navBar = ({}) => {

    return (
        <nav className="navbar navbar-dark">
            {/* navbar title  */}

            <a href="/#" className="navbar-title">Hook Em Up</a>
            {/* website title that links back to the home page */}

            <div id="navbar" className="navbar-collapse">
                <ul>

                    {/* All the pages, clickable titles that link to them  */}

                    <li className="navTitle">
                    <a href="/items">Items</a>
                    </li>

                    <li className="navTitle">
                        <a href="/login">Login</a>
                    </li>

                    <li className="navTitle">
                        <a href="/cart">Cart</a>
                    </li>

                    <li className="navTitle">
                        <a href="/transactions">Transactions</a>
                    </li>




                </ul>

            </div>

        </nav>



    );

};

















export default navBar; 