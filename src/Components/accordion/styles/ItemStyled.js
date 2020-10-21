import styled from "styled-components";

export const ItemStyled = styled.div`
  /* width: 100%; */
  margin-bottom: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303030;
  margin-bottom: 2px;
  padding: 10px 15px;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: auto;
  }
`;

export const Body = styled.div`
  background-color: #303030;
  padding: 10px 15px;
  transition: max-height 1s;
  max-height: 1200px;
`;
