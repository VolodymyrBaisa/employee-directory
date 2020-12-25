import React from "react";
import "./search.scss";
import SearchSVG from "./search.svg";

function Search() {
    return (
        <>
            <div className="search-container">
                <img src={SearchSVG} className="searchIcon" alt="Search" />
                <input
                    type="text"
                    className="search"
                    placeholder="Search"
                ></input>
            </div>
        </>
    );
}

export default Search;
