import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaHome, FaInfinity, FaInfoCircle, FaGamepad } from "react-icons/fa";

export default function Rules(props) {
  return (
    <div className="Container">
      <div className="Header">
        <h1>
          <FaInfinity />
          Rules
        </h1>
      </div>
      <div className="Rules">
        <br />
        <h4>
          In the Game of Life, these rules examine each cell of the grid. For
          each cell, it counts that cell's eight neighbors (up, down, left,
          right, and diagonals), and then act on that result.
        </h4>
        <p>
          These rules, which compare the behavior of the automaton to real life,
          can be condensed into the following:
        </p>
        <ul>
          <li>Any live cell with two or three live neighbours survives.</li>
          <li>Any dead cell with three live neighbours becomes a live cell.</li>
          <li>
            All other live cells die in the next generation. Similarly, all
            other dead cells stay dead.
          </li>
        </ul>
      </div>
      <footer>
        <CardGroup>
          <Card className="text-center" style={{ margin: "4rem" }}>
            <Card.Body>
              <Card.Title>
                <FaHome />
              </Card.Title>

              <Card.Text>Navigate back home</Card.Text>
              <Card.Link>
                <Link to="/">
                  <Button variant="dark" block>
                    Home
                  </Button>{" "}
                </Link>
              </Card.Link>
            </Card.Body>
          </Card>

          <Card className="text-center" style={{ margin: "4rem" }}>
            <Card.Body>
              <Card.Title>
                <FaInfoCircle />
              </Card.Title>

              <Card.Text>
                Learn all about the history of the really cool super awesome
                game by reading the about section!
              </Card.Text>
              <Card.Link>
                <Link to="/about">
                  <Button variant="dark" block>
                    About
                  </Button>{" "}
                </Link>
              </Card.Link>
            </Card.Body>
          </Card>

          <Card className="text-center" style={{ margin: "4rem" }}>
            <Card.Body>
              <Card.Title>
                <FaGamepad />
              </Card.Title>
              <Card.Text>Play this really cool super awesome game!</Card.Text>
              <Card.Link>
                <Link to="/gameoflife">
                  <Button variant="dark" block>
                    Play!
                  </Button>{" "}
                </Link>
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </footer>
    </div>
  );
}
