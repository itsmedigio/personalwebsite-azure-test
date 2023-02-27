import "../shared.css";
import MyCard from "./card/MyCard";
import "./Home.css";

function Home() {
  return (
    <>
      <div className={`homecontents background-dark`}>
        <h1 className="welcometext">
          Hello! I'm Davide and welcome to my personal website! 😊
        </h1>
        <h2 style={{ color: "white", textAlign: "center", paddingTop: 20 }}>
          Some things that I've done:
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
      </div>
    </>
  );
}

export default Home;
