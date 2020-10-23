import React from "react";
import {
  Container,
  Title,
  Input,
  ContainerForm,
  ButtonSubmit,
  Text,
  TextSmall,
  Link,
} from "./styles/FormStyled";

const Form = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

Form.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

Form.ContainerForm = ({ children, ...restProps }) => {
  return <ContainerForm {...restProps}>{children}</ContainerForm>;
};

Form.ButtonSubmit = ({ children, ...restProps }) => {
  return <ButtonSubmit {...restProps}>{children}</ButtonSubmit>;
};

Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default Form;
