import React from "react";

import JumbotronContainer from "../containers/JumbotronContainer";
import FooterContainer from "../containers/FooterContainer";
import FaqsContainer from "../containers/faqas/FaqsContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { Feature, OptForm } from "../components";

const Home = () => {
  return (
    <div>
      <HeaderContainer>
        <Feature>
          <OptForm />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
};

export default Home;
