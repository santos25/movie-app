import React from "react";
import { Container, Title, Row, Column, Text } from "./styles/FooterStyled";
const Footer = () => {
  return (
    <Container>
      <Title>¿Preguntas? Llama al 01 800 917 1564</Title>
      <Row>
        <Column>
          <Text>Preguntas frecuentes</Text>
          <Text>Relaciones con inversionistas</Text>
          <Text>Formas de ver</Text>
          <Text>Información corporativa</Text>
          <Text>Originales de Netflix</Text>
        </Column>
        <Column>
          <Text>Preguntas frecuentes</Text>
          <Text>Relaciones con inversionistas</Text>
          <Text>Formas de ver</Text>
          <Text>Información corporativa</Text>
        </Column>
        <Column>
          <Text>Preguntas frecuentes</Text>
          <Text>Relaciones con inversionistas</Text>
          <Text>Formas de ver</Text>
          <Text>Información corporativa</Text>
        </Column>
        <Column>
          <Text>Preguntas frecuentes</Text>
          <Text>Relaciones con inversionistas</Text>
          <Text>Formas de ver</Text>
          <Text>Información corporativa</Text>
        </Column>
      </Row>
      <Text>Netflix Colombia</Text>
    </Container>
  );
};

export default Footer;
