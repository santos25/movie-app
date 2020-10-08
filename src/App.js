import React, { useState, useEffect } from "react";
import { StyledApp, Header, MoviesSection } from "./StyledApp";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  useEffect(() => {}, []);
  return (
    <StyledApp>
      <Header>
        <div className="sidebar">
          <h2>Movie App</h2>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
          <input
            className="search-movie"
            type="text"
            placeholder="Find whatever you want"
          />
        </div>
      </Header>
      <MoviesSection>
        <div className="features">
          <h3>features</h3>
        </div>
        <div className="movies-container">
          <h3>movies container</h3>
        </div>
      </MoviesSection>
    </StyledApp>
  );
}

export default App;
