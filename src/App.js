import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Container from "./components/jumbotron/Container";

import jumboData from "./fixtures/jumbo.json";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Container>
        {jumboData.map((item) => (
          <Jumbotron
            key={item.id}
            titulo={item.title}
            subTitulo={item.subTitle}
            image={item.image}
            direction={item.direction}
          />
        ))}
      </Container>
    </div>
  );
};

export default App;
