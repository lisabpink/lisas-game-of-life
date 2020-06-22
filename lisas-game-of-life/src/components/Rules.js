import React from "react";
import { Link } from "react-router-dom";

export default function Rules(props) {
  return (
    <div className="Container">
      <div className="Header">
        <h1>Rules for the Game of Life:</h1>
      </div>
      <div className="Rules">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Rule One</li>
          <li>Rule One</li>
          <li>Rule Three</li>
        </ul>
        <br />
        <Link to="/gameoflife">
          <button>Play!</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
}