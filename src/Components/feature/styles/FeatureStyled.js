import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin: auto;
  height: 100%;
  max-width: 70%;
  padding: 10px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
export const Text = styled.h3``;
