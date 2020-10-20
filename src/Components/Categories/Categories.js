import React from "react";

import { StyledCategory } from "./StyledCategories";

const Categories = () => {
  return (
    <StyledCategory>
      <h3>Categories</h3>
      <div>
        <ul>
          <li>
            <a>Movies </a>
          </li>
          <li>
            <a>TV Shows </a>
          </li>
        </ul>
      </div>
    </StyledCategory>
  );
};

export default Categories;
