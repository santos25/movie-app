import React from "react";

import { IMAGE_URL } from "../../Api/Api";
import { StyledMovie } from "./StyledMovie";

const Movie = ({ poster_path, title, vote_average }) => {
  return (
    <StyledMovie>
      <img src={`${IMAGE_URL}${poster_path}`} alt="" />
      <div className="content">
        <span>{title}</span>
        <span>{vote_average}</span>
      </div>
    </StyledMovie>
  );
};

export default Movie;
