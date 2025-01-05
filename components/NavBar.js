import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-brand">PriceSpotter</h1>
            <ul className="navbar-links">
                <li>
                    <Link to="/mainpage">Mainpage</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/search">Search</Link>
                </li>

                <li>
                    <Link to="/submit">Submit</Link>
                </li>

            </ul>
        </nav>
    );
}
