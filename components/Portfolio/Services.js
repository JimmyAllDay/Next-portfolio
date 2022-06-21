import React from "react";

import { Container } from "react-bootstrap";

function Services() {
  return (
    <div className="p-5 my-5 my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        {/* TODO: The below div is aligned with flex box and can be duplicated when additional information is added to this section */}
        <div className="service">
          <h3>Javascript</h3>
          <p>
            I have been training in Javascript technologies since late 2020. I
            have foundational Javascript and React skills, and I am currently
            rounding these out with training in Angular, Node, Express and Mongo
            DB. Among my various coding interests, I am particularly drawn to
            the concepts of Test Driven Development and Functional Programming,
            for the confidence, maintainability and elegance that these
            approaches offer.
          </p>
        </div>
      </div>

      <a href="#work" className="btn mb-5">
        My Work
      </a>
    </div>
  );
}

export default Services;
