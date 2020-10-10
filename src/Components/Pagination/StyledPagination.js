import styled from "styled-components";

export const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
  max-width: 100%;

  .pagination {
    display: flex;
    justify-content: center;
    border: 1px solid white;
    border-radius: 50px;

    .page-item {
      padding: 10px 15px;
      margin-right: 1rem;

      a {
        color: white;
      }
    }
  }
`;
