import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="container my-page">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src="/me.jpg" className="my-page-photo" alt="" />
        </div>
        <div className="col-12 col-md-8">
          <h1 className="my-page-title">Davide Di Giovanni</h1>
          <h2 className="my-page-subtitle">
            IT Consultant <br></br> Software Developer
          </h2>
          <p className="my-page-description">
            Hi there! I'm Davide and I am a 23-year-old folk from Turin, Italy.
            I was highly passionate about IT since I was a kid, and I was
            fortunate enough to build my passion into my job! My main focus,
            currently, is related to cloud computing, DevOps methodologies, and
            programming. I have experience working mainly with C# and dotnet,
            the Azure and IBM Cloud and javascript frameworks such as Angular
            and React but I am always eager to learn more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
