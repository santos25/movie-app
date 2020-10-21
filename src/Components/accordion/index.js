import React from "react";

import { Inner, Title, Items } from "./styles/AccordionStyled";

import jsonFaqs from "../../fixtures/faqs.json";
import Item from "./Item";
import OptForm from "../opt-form";
const Accordion = () => {
  return (
    <Inner>
      <Title>Preguntas frecuentes</Title>
      <Items>
        {jsonFaqs.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </Items>

      <OptForm />
    </Inner>
  );
};

export default Accordion;
