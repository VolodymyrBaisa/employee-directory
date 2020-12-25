import React from "react";
import Search from "../Search/Search.js";
import Card from "../Card/Card.js";
import "./body.scss";

function Body() {
    return (
        <div className="body-container">
            <Search />
            <Card />
        </div>
    );
}

export default Body;
