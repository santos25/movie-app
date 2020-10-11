import React from "react";

import { StyledCreateMovie } from "./StyledCreateMovie";
const CreateMovie = ({createSubmit}) => {
  return <StyledCreateMovie>
      <form onSubmit={(e)=> createSubmit(e)}>
            <div className='form-control'>
                <label htmlFor='image'>Imagen</label>
                <input id="image"/>
            </div>
            <div className='form-control'>
                <label htmlFor='title'>Title</label>
                <input id="title"/>
            </div>
            <div className='form-control'>
                <label htmlFor='vote'>Vote Average</label>
                <input id="vote"/>
            </div>
      </form>
  </StyledCreateMovie>;
};

export default CreateMovie;
