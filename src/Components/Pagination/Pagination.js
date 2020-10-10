import React from "react";
import { StyledPagination } from "./StyledPagination";
const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    console.log(i);
    if (i === 11) {
      break;
    } else {
      pageNumbers.push(i);
    }
  }

  return (
    <StyledPagination>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
