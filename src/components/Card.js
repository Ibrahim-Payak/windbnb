import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ title, rating, beds, photo, superHost }) => {
  return (
    <div className="propertyCard">
      <img src={photo} alt="Property" className="propertyImage" />
      <div className="summary">
        <p className="left">
          {superHost && <span className="superHost">SUPER HOST</span>} Entire
          apartment {beds} beds
        </p>
        <div className="right">
          <p>
            <FaStar className="starIcon" size={25} />
            {rating}
          </p>
        </div>
      </div>
      <p className="title">{title}</p>
    </div>
  );
};
export default Card;
