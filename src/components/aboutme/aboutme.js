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
            Hi there! My name is Davide and I am a 23-year-old male from Turin,
            Italy. I am highly passionate about IT, in particular about cloud
            computing, DevOps, and programming, and I offer consulting services
            in these areas. I try to stay up to date with the latest
            technologies and trends in the industry. I have experience working
            mainly with C# programming languages and dotnet, but I am always
            eager to learn more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
