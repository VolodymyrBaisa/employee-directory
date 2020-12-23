import React from "react";
import Button from "../Button/Button.js";
import "./navigation.scss";

function Navigation() {
    return (
        <div className="nav-container">
            <Button content={"People"} />
            <Button content={"Teams"} />
            <Button content={"Projects"} />
        </div>
    );
}

export default Navigation;
