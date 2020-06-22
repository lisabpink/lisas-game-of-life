import React from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <div className="Container">
      <div className="Header">
        <h1>About the Game</h1>
      </div>
      <div className="About">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <Link to="/gameoflife">
          <button>Play!</button>
        </Link>
        <Link to="/rules">
          <button>Rules </button>
        </Link>
      </div>
    </div>
  );
}
