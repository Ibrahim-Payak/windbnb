import React, { useState } from "react";
import logo from "../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import GuestSelect from "./GuestSelection";
import data from "../stays.json";

const Navbar = ({ setFilteredResults }) => {
  const [expanded, setExpanded] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [totalGuestCount, setTotalGuestCount] = useState(0);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;

    const locationParts = value.split(",");

    if (locationParts.length > 1) {
      const locationCity = locationParts[0].trim();
      const locationCountry = locationParts[1].trim();

      setCity(locationCity);
      setCountry(locationCountry);
    }
  };

  const handleExpand = (event) => {
    if (!expanded) {
      event.stopPropagation();
      setExpanded(true);
    }
  };

  const handleSubmit = () => {
    const filteredResults = data.filter((item) => {
      const cityMatch =
        city === "" || item.city.toLowerCase().includes(city.toLowerCase());
      const countryMatch =
        country === "" ||
        item.country.toLowerCase().includes(country.toLowerCase());
      const guestsMatch =
        totalGuestCount === 0 || item.maxGuests >= totalGuestCount;

      return cityMatch && countryMatch && guestsMatch;
    });

    setFilteredResults(filteredResults);
    setExpanded(false);
    setIsFocus(false);
  };

  const handleGuestChange = (adult, child) => {
    const totalGuestCount = adult + child;
    setTotalGuestCount(totalGuestCount);
  };

  function handleFocus() {
    setIsFocus(true);
  }

  return (
    <div className="main">
      <img src={logo} alt="logo"></img>
      <button
        className={`searchButton ${expanded ? "expanded" : ""}`}
        onClick={handleExpand}
      >
        <div className="search">
          <div className="location">
            {expanded && <h4 className="searchTitle">Location</h4>}

            <input
              class={`firstBox ${expanded ? "searchExpanded" : ""}`}
              name="location"
              type="search"
              placeholder="Location"
              onChange={handleChange}
            />
          </div>

          <div className="guest" onClick={handleFocus}>
            {expanded && <h4 className="searchTitle">Guests</h4>}

            {totalGuestCount > 0 ? (
              <div
                className={`guestCounter ${expanded ? "searchExpanded" : ""}`}
              >
                {totalGuestCount} guests
              </div>
            ) : (
              <input
                class={`secondBox ${expanded ? "searchExpanded" : ""}`}
                name="guest"
                type="search"
                placeholder="Add Guests"
              />
            )}

            {expanded && isFocus && (
              <GuestSelect onCountChange={handleGuestChange} />
            )}
          </div>
          <div className={`${expanded ? "buttonContainer" : ""}`}>
            <button
              className={`searchBox ${expanded ? "searchBoxExpand" : ""}`}
              type="submit"
              onClick={handleSubmit}
            >
              <AiOutlineSearch
                className={`searchIcon ${expanded ? "iconExpanded" : ""}`}
                size={30}
              />{" "}
              {expanded ? "Search" : ""}
            </button>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
