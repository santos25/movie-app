import styled from "styled-components";

export const JumbotronStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  padding: 1rem 1rem;
  color: white;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Titulo = styled.h1`
  font-size: 50px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitulo = styled.h2`
  font-size: 26px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Pane = styled.div`
  width: 50%;
  padding: 0 2rem;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  color: white;
  width: 100%;
  border-bottom: 3px solid #bfbfbf;
`;
