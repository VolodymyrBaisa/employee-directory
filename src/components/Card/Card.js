import React from "react";
import { TableHeader, TableRow } from "../Table/Table.js";
import "./card.scss";

function Card() {
    return (
        <>
            <div className="card-container">
                <TableHeader />
                <TableRow />
            </div>
        </>
    );
}

export default Card;
