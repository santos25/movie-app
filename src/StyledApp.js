import styled from "styled-components";

export const StyledApp = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 5rem;
  /* border: 1px solid black; */

  .sidebar {
    width: 25%;
    /* border: 1px solid black; */
  }

  .search {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    width: 30%;

    &-movie {
      flex-grow: 1;
    }

    &-movie:focus {
      outline: none;
    }

    &-movie::placeholder {
      color: #a6a6a4;
    }
  }
`;

export const MoviesSection = styled.section`
  display: flex;
  /* border: 1px solid black; */

  .features {
    width: 25%;
    /* border: 1px solid black; */
  }

  .movies-container {
  }
`;
