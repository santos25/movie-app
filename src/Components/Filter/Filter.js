import React from "react";

import { StyledFilter } from "./StyledFilter";
const Filter = ({ handleFilter, values, defaultValue }) => {
  return (
    <StyledFilter>
      <select
        name="select"
        defaultValue="all"
        onChange={(e) => handleFilter(e)}
      >
        <option value={defaultValue.id}>{defaultValue.name}</option>

        {values.map((value, i) => (
          <option key={i} value={value.id} name={value.name}>
            {value.name}
          </option>
        ))}
      </select>
    </StyledFilter>
  );
};

export default Filter;
