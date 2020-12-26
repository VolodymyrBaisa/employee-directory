import React, { useContext } from "react";
import "./search.scss";
import SearchSVG from "./search.svg";
import DataAreaContext from "../../utils/DataAreaContext.js";

function Search() {
    const context = useContext(DataAreaContext);
    return (
        <>
            <div className="search-container">
                <img src={SearchSVG} className="searchIcon" alt="Search" />
                <input
                    type="text"
                    className="search"
                    placeholder="Search"
                    onChange={(e) => context.handleSearchChange(e)}
                ></input>
            </div>
        </>
    );
}

export default Search;
