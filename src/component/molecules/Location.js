import React from "react";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Location = ({ name, url, src }) => {
  return (
    <div className="location-holder">
      <div className="location-name text-dark shadow">
        <img src={src} className="photo" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Location;
