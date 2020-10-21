import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/images/misc/home-bg.jpg"});
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Frame = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  padding: 35px 50px;

  img {
    width: 125px;
    height: 100px;
  }
`;

// export const Logo = styled.img``;
export const Logo = styled.span`
  font-size: 40px;
  color: red;
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const ButtonLink = styled(Link)`
  margin-right: 1.2rem;
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  color: white;
  text-decoration: none;
`;
