import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
export const Container = styled.div`
  max-width: 450px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #8c8c8c;
  margin: auto;
  border-radius: 4px;
  padding: 40px 50px;
  min-height: 500px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: white;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 30px;
  line-height: normal;
  padding: 20px 25px;
  background-color: #333;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const ButtonSubmit = styled.button`
  border: none;
  border-radius: 5px;
  background-color: red;
  padding: 10px 15px;
  color: white;
  font-size: 15px;
`;

export const Text = styled.p``;

export const TextSmall = styled.p`
  font-size: 12px;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;
