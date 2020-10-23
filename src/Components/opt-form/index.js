import React from "react";
import { Inner, Title, Form, Input, Button } from "./styles/OptFormStyled";
const OptForm = () => {
  return (
    <Inner>
      <Title>
        ¿Quieres ver Peliculas ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix
      </Title>
      <Form>
        <Input />
        <Button>
          <span>Comienza Ya</span>
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/chevron-right.png`}
              alt="Try Now"
            />
          </span>
        </Button>
      </Form>
    </Inner>
  );
};

export default OptForm;
