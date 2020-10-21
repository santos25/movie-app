import React from "react";
import { HeaderStyled, Frame, Logo, ButtonLink } from "./styles/HeaderStyled";
import logoNetflix from "../../logo.svg";

import { Link } from "react-router-dom";
import { HOME, SIGNIN } from "../../constants/Routes";
const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <Frame>
        <Link to={HOME}>
          {/* <Logo src={logoNetflix} /> */}
          <Logo>santflix</Logo>
        </Link>
        <ButtonLink to={SIGNIN}>Sign In</ButtonLink>
      </Frame>
      {children}
    </HeaderStyled>
  );
};

export default Header;
