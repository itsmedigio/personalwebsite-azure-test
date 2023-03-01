import React from "react";
import { animated, useSpring } from "react-spring";
import "../shared.css";
import MyCard from "./card/MyCard";
import "./Home.css";

function Home() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 250 },
  });

  return (
    <>
      <animated.div style={fadeIn} className={`homecontents background-dark`}>
        <h1 className="welcometext">
          Hello! I'm Davide and welcome to my personal website! 😊
        </h1>
        <h2 style={{ color: "white", textAlign: "center", paddingTop: 20 }}>
          Some things that I've worked with:
        </h2>
        <div style={{ paddingTop: 20 }} className="customCard row">
          <div className="col-4">
            <MyCard
              cardtitle="Angular"
              cardbody="Internal applications for the banking business, such as Succession Manager, Pledges etc..."
              cardimagepath="./angular.png"
            />
          </div>
          <div className="col-4">
            <MyCard
              cardtitle="👑 DevOps 👑"
              cardbody="Azure DevOps Pipelines, cloud resources provisioning, Kubernetes, Docker Containers, Linux Scripting etc..."
              cardimagepath="./devops.svg"
            />
          </div>
          <div className="col-4">
            <MyCard
              cardtitle="C#"
              cardbody="Microservices, Console Apps and APIs in .NET Core, API Gateways"
              cardimagepath="./dotnet.svg"
            />
          </div>
        </div>
        <h2
          style={{
            color: "white",
            paddingTop: 50,
            paddingLeft: 40,
            fontStyle: "italic",
          }}
        >
          My main interest currently are DevOps and Cloud Technologies
        </h2>
        <p style={{ color: "white", paddingTop: 10, paddingLeft: 40 }}>
          With BNP Paribas Asset Management I worked on a Cloud Migration
          Project, we took some very old applications and rewritten them in C#
          using dotnet6 and Angular
          <br />
          Here I had the chance to learn some DevOps techniques and tools such
          as CI/CD pipelines, Docker, Kubernetes, Observability and many more.
          <br />I look forward to increase my knowledge and skills on these
          topics as I really liked them!
        </p>
      </animated.div>
    </>
  );
}

export default Home;
