import React from "react";
import "./table.scss";

const col = (prop) => {
    return <div className="t-col">{prop}</div>;
};

export const TableHeader = () => {
    return (
        <div className="t-header-container">
            {col("Employee")}
            {col("Phone")}
            {col("Email")}
            {col("DOB")}
        </div>
    );
};

export const TableRow = ({ avatar, name, phone, email, dob }) => {
    return (
        <div className="t-row-container">
            {col(
                <>
                    <img src={avatar} className="avatar" alt="avatar" />
                    <div>{name}</div>
                </>
            )}
            {col(phone)}
            {col(email)}
            {col(dob)}
        </div>
    );
};
