import React from "react";
import { Link } from "react-router-dom";

export default function Welcome(props) {
  return (
    <div className="Welcome">
      <div className="WelcomeInner">
        <h1>Conways Game of Life</h1>
        <Link to="/gameoflife">
          <button>Play!</button>
        </Link>
        <Link to="/rules">
          <button>Rules</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
}
