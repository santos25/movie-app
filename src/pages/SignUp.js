import React, { useState } from "react";
import { SIGNIN } from "../constants/Routes";
import { Form } from "../components";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (target) => {
    target.preventDefault();
    console.log("Sign Up ");
  };

  return (
    <>
      <HeaderContainer>
        <Form title="Registrate">
          <Form.ContainerForm onSubmit={({ target }) => handleSubmit(target)}>
            <Form.Input
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Name"
            />
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
            Ya registrado?
            <Form.Link to={SIGNIN}>Inicia sesion</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
