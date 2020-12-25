import React from "react";
import { TableHeader, TableRow } from "../Table/Table.js";
import "./card.scss";

const name1 = "Kenneth Day";
const name2 = "Kenneth Day 1234";
function Card() {
    return (
        <>
            <div className="card-container">
                <TableHeader />
                <TableRow name={name1} />
                <TableRow name={name2} />
            </div>
        </>
    );
}

export default Card;
