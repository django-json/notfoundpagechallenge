import React from "react";

import "./notfound.styles.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <header>
        <h2>404 not found</h2>
      </header>
      <main>
        <div className="error-image-container">
          <img
            src={require("../../assets/scarecrow.png")}
            alt="404 Not Found"
          />
        </div>
        <div className="error-info">
          <h2>I have bad news for you</h2>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button>back to homepage</button>
        </div>
      </main>
      <footer>
        <p>
          <a href="https://github.com/django-json">django-json</a>@
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  );
};

export default NotFound;
