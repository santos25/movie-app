import React, { useState } from "react";
import { Form } from "../components";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import { SIGNUP } from "../constants/Routes";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (target) => {
    target.preventDefault();
    console.log("Sign In ");
  };
  return (
    <>
      <HeaderContainer>
        <Form title="Inicia sesión">
          <Form.ContainerForm onSubmit={({ target }) => handleSubmit(target)}>
            <Form.Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Email"
            />
            <Form.Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Password"
            />
            <Form.ButtonSubmit type="submit">Iniciar Sesion</Form.ButtonSubmit>
          </Form.ContainerForm>
          <Form.Text>
            ¿Primera vez en Netflix?{" "}
            <Form.Link to={SIGNUP}> Suscríbete ya.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot. Más info.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
