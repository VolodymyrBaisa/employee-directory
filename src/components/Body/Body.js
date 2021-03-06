import React, { useState, useEffect } from "react";
import Search from "../Search/Search.js";
import Card from "../Card/Card.js";
import API from "../../utils/API.js";
import DataAreaContext from "../../utils/DataAreaContext.js";
import "./body.scss";

function Body() {
    const [employeeState, setEmployeeState] = useState({
        employee: [],
        order: "ascend",
        filtered: [],
    });

    useEffect(() => {
        API.getEmployee().then((results) => {
            setEmployeeState({
                ...employeeState,
                employee: results.data.results,
                filtered: results.data.results.sort((a, b) => {
                    if (a.name.first < b.name.first) {
                        return -1;
                    } else return 1;
                }),
            });
        });
    }, []);

    const handleSearchChange = (event) => {
        const filter = event.target.value;
        const filteredList = employeeState.employee.filter((item) => {
            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setEmployeeState({ ...employeeState, filtered: filteredList });
    };

    const handleOnClick = () => {
        if (employeeState.order === "ascend") employeeState.order = "descend";
        else employeeState.order = "ascend";

        const filteredList = employeeState.filtered.sort((a, b) => {
            if (employeeState.order === "ascend") {
                if (a.name.first < b.name.first) {
                    return -1;
                } else return 1;
            } else {
                if (a.name.first > b.name.first) {
                    return -1;
                } else return 1;
            }
        });

        setEmployeeState({ ...employeeState, filteredList });
    };

    return (
        <DataAreaContext.Provider
            value={{ employeeState, handleSearchChange, handleOnClick }}
        >
            <div className="body-container">
                <Search />
                <Card />
            </div>
        </DataAreaContext.Provider>
    );
}

export default Body;
