import React from "react";
import "./avatar.scss";

const Avatar = ({ avatar }) => {
    return <img src={avatar} className="avatar" alt="avatar" />;
};

export default Avatar;
