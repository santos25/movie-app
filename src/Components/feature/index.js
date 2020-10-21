import React from "react";
import { Container, Title, Text } from "./styles/FeatureStyled";
const Feature = ({ children }) => {
  return (
    <Container>
      <Title>Porno 5k cuando quieras Free por el momento</Title>
      <Text>Disfruta donde quieras. Cancela cuando quieras.</Text>
      {children}
    </Container>
  );
};

export default Feature;
