import React from "react";
import data from "../stays.json";
import Card from "./Card";

const List = ({ filteredResults }) => {
  const records = filteredResults !== null ? filteredResults : data;

  return (
    <div className="propertyList">
      {records.map((property) => (
        <Card
          photo={property.photo}
          beds={property.beds}
          rating={property.rating}
          title={property.title}
          superHost={property.superHost}
        />
      ))}
    </div>
  );
};

export default List;
