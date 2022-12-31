import "../shared.css";
import "./Home.css";
import MyCard from "./card/MyCard";

function Home() {
  return (
    <>
      <div className={`homecontents background-dark`}>
        <h1 className="welcometext">
          Hello! I'm Davide and welcome to my personal website!
        </h1>
        <h2 style={{ color: "white", textAlign: "center", paddingTop: 20 }}>
          Some things that I've done:
        </h2>
        <div style={{ paddingTop: 20 }} className="customCard row">
          <div className="col-4">
            <MyCard />
          </div>
          <div className="col-4">
            <MyCard />
          </div>
          <div className="col-4">
            <MyCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
