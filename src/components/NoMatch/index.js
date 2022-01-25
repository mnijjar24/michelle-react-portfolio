import React from "react";
import photo from '../../assets/img/me.jpg';

const NoMatch = () => {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
            src={photo}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
      <div className="my-2">
        <p>
        My name is Michelle Nijjar and I am a full stack web developer. My objective is to obtain a job where I can utilize my skills and experience.
        </p>
      </div>
    </section>
  );
};

export default NoMatch;