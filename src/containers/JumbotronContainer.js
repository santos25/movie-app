import React from "react";
import { Jumbotron, JumboContainer } from "../components";
import jumboData from "../fixtures/jumbo.json";

const JumbotronContainer = () => {
  return (
    <JumboContainer>
      {jumboData.map((item) => (
        <Jumbotron
          key={item.id}
          titulo={item.title}
          subTitulo={item.subTitle}
          image={process.env.PUBLIC_URL + item.image}
          direction={item.direction}
        />
      ))}
    </JumboContainer>
  );
};

export default JumbotronContainer;
