import React from "react";
import { Inner, Title, Form, Input, Button } from "./styles/OptFormStyled";
const OptForm = () => {
  return (
    <Inner>
      <Title>
        ¿Quieres ver Porno ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Porno
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
