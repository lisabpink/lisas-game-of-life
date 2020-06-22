import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GameOfLife extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>Conways Game of Life</h1>
        </div>
        <p>Pretend theres a game right here- k thx!</p>
        <Link to="/rules">
          <button>Rules</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    );
  }
}
