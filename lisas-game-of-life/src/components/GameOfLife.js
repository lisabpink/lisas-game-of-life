import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GameOfLife extends Component {
  render() {
    return (
      <div className="GameContainer">
        <div className="GameHeader">
          <h1>Conways Game of Life</h1>
          <p>Pretend theres a game right here- k thx!</p>
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
}
