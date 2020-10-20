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
    width: 15%;
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

  .addmovie {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px;
    width: 55%;

    i {
      font-size: 1.5rem;
      padding: 0 15px;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  /* border: 1px solid black; */
  /* align-items: center; */
  .left-side {
    width: 15%;
    /* border: 1px solid black; */
  }

  .filter-container {
    display: flex;
    width: 85%;
    /* border: 1px solid black; */
    padding: 10px 15px;
    align-items: center;
    justify-content: space-around;

    .filter {
      display: flex;
      justify-content: space-around;
      width: 70%;
      /* border: 1px solid black; */
    }
  }

  .right-side {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-around; */
    max-width: 85%;
    /* border: 1px solid black; */

    .movies {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;
