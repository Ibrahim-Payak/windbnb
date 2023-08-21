import React, { useState } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";

const App = () => {
  const [filteredResults, setFilteredResults] = useState(null);
  console.log(filteredResults);
  return (
    <>
      <div className="container">
        <Navbar setFilteredResults={setFilteredResults} />
        <div class="mainHeader">
          <h1 class="mainTitle">
            {filteredResults != null
              ? `Stays in ${filteredResults[0].country}`
              : ""}
          </h1>
          <span class="mainCount">
            {filteredResults != null ? `${filteredResults?.length} stays` : ""}{" "}
          </span>
        </div>
        <List filteredResults={filteredResults} />
      </div>
    </>
  );
};

export default App;
