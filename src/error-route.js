import "./error-route.css";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <>
        <div className={`homecontents background-dark`}>
          <h1 className="error">404</h1>
          <h2 className="welcometext">
            Oops! Looks like you landed on a non-existing page...
          </h2>
          <span></span>
          <div style={{ paddingTop: 40 }} className="d-flex align-items-center">
            <img className="mx-auto" src="/cat.jpg" alt=""></img>
          </div>
        </div>
      </>
    </div>
  );
}
