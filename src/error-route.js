import "./error-route.css";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <>
        <div className={`homecontents background-dark`}>
          <h1 className="error">404</h1>
          <h2 className="welcometext">
            Oops! Looks like you broke everything...
          </h2>
        </div>
      </>
    </div>
  );
}
