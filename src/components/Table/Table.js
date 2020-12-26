import React, { useContext } from "react";
import Avatar from "../Avatar/Avatar.js";
import ArrowUp from "./arrow_up.svg";
import ArrowDown from "./arrow_down.svg";
import DataAreaContext from "../../utils/DataAreaContext.js";
import "./table.scss";

const col = (prop) => {
    return <div className="t-col">{prop}</div>;
};

export const TableHeader = () => {
    const context = useContext(DataAreaContext);
    return (
        <div className="t-header-container">
            {col(
                <>
                    <div
                        className="t-header-filter"
                        onClick={(e) => context.handleOnToggle(e)}
                    >
                        Employee
                    </div>
                    <div
                        className="t-header-filter"
                        onClick={(e) => context.handleOnToggle(e)}
                    >
                        {context.employeeState.order === "ascend" ? (
                            <img src={ArrowUp} alt="employee filter by name" />
                        ) : (
                            <img
                                src={ArrowDown}
                                alt="employee filter by name"
                            />
                        )}
                    </div>
                </>
            )}
            {col("Phone")}
            {col("Email")}
            {col("DOB")}
        </div>
    );
};

export const TableRow = ({ login, avatar, name, phone, email, dob }) => {
    return (
        <div key={login.uuid} className="t-row-container">
            {col(
                <>
                    <Avatar avatar={avatar} />
                    <div>{name}</div>
                </>
            )}
            {col(phone)}
            {col(
                <a href={"mailto:" + email} target="__blank">
                    {email}
                </a>
            )}
            {col(dob)}
        </div>
    );
};
