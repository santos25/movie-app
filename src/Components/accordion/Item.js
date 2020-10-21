import React, { useState } from "react";
import { ItemStyled, Header, Body } from "./styles/ItemStyled";

const Item = ({ header, body }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ItemStyled>
      <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}>
        <div>{header}</div>
        {toggleShow ? (
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/close-slim.png`}
            alt=""
          />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/images/icons/add.png`} alt="" />
        )}
      </Header>
      {toggleShow ? <Body>{body}</Body> : null}
    </ItemStyled>
  );
};

export default Item;
