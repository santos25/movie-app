import React from "react";
import {
  Item,
  JumbotronStyled,
  Titulo,
  SubTitulo,
  Image,
  Pane,
} from "./styles/JumbotronStyled";

const Jumbotron = ({ titulo, subTitulo, image, direction }) => {
  return (
    <Item>
      <JumbotronStyled direction={direction}>
        <Pane>
          <Titulo>{titulo}</Titulo>
          <SubTitulo>{subTitulo}</SubTitulo>
        </Pane>
        <Pane>
          <Image src={image} />
        </Pane>
      </JumbotronStyled>
    </Item>
  );
};

export default Jumbotron;
