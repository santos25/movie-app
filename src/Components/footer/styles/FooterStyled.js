import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 0 auto;
  color: #757575;
`;

export const Title = styled.h3``;

export const Text = styled.a`
  font-size: 13px;
  line-height: normal;
  margin: 0.5rem 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  margin: 1rem 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
