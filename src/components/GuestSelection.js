import React, { useState, useEffect } from "react";

const GuestSelect = ({ onCountChange }) => {
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  function handleChange(event) {
    event.preventDefault();
    const { name } = event.target;
    switch (name) {
      case "adultIncrement":
        setAdultCount(1 + adultCount);
        break;
      case "childrenIncrement":
        setChildrenCount(childrenCount + 1);
        break;
      case "adultDecrement":
        if (adultCount > 0) {
          setAdultCount(adultCount - 1);
        }
        break;
      case "childrenDecrement":
        if (childrenCount > 0) {
          setChildrenCount(childrenCount - 1);
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    onCountChange(adultCount, childrenCount);
  }, [adultCount, childrenCount]);

  return (
    <>
      <div className="guestContainer">
        <div className="guestAdult">
          <h1 className="guestTitle">Adults</h1>
          <br />
          <span className="guestSubtitle">Ages 13 or above</span>
          <br />
          <button
            name="adultDecrement"
            className="counterBtn"
            onClick={handleChange}
          >
            -
          </button>
          <span className="guestCounter">{adultCount}</span>
          <button
            name="adultIncrement"
            className="counterBtn"
            onClick={handleChange}
          >
            +
          </button>
        </div>
        <br />
        <div className="guestChildren">
          <h1 className="guestTitle">Children</h1>
          <br />
          <span className="guestSubtitle">Ages 2-12</span>
          <br />
          <button
            name="childrenDecrement"
            className="counterBtn"
            onClick={handleChange}
          >
            -
          </button>
          <span className="guestCounter">{childrenCount}</span>
          <button
            name="childrenIncrement"
            className="counterBtn"
            onClick={handleChange}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default GuestSelect;
