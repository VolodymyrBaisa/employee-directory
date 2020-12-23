import React from "react";
import Logo from "../Logo/Logo.js";
import Navigation from "../Navigation/Navigation.js";
import LineSeparator from "../LineSeparator/LineSeparator.js";
import "./header.scss";

function Header() {
    return (
        <>
            <div className="header-container">
                <Logo />
                <Navigation />
            </div>
            <LineSeparator />
        </>
    );
}

export default Header;
