import React from "react";
import { Link } from "react-router-dom";

export default function Welcome(props) {
  return (
    <div className="Container">
      <div className="Header">
        <h1>Conways Game of Life</h1>
      </div>
      <div className="Welcome">
        <Link to="/gameoflife">
          <button>Play!</button>{" "}
        </Link>
        <Link to="/rules">
          <button>Rules</button>{" "}
        </Link>
        <Link to="/about">
          <button>About</button>{" "}
        </Link>
      </div>
    </div>
  );
}
