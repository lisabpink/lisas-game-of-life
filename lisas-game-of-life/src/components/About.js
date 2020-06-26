import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaHome, FaInfinity, FaInfoCircle, FaGamepad } from "react-icons/fa";

export default function About(props) {
  return (
    <div className="Container">
      <div className="Header">
        <h1>
          <FaInfoCircle />
          About
        </h1>
      </div>
      <div className="About">
        <p>
          The Game of Life is a cellular automaton that requires no input once
          the game has begun and outcome depends wholly on the starting state.
        </p>
        <p>
          Cellular automata simulate living beings/organisms and reproduction.
          They are also, by nature,{" "}
          <a href="https://en.wikipedia.org/wiki/Turing_completeness">
            Turing complete
          </a>
          . John Conway published his initial game in the October 1970 issue of
          Scientific American. when Conway was first figuring the later
          development of certain configurations, he did so completely by hand.
        </p>
        <p>
          Cellular automata can be used to create musical and visual
          compositions, to generate random numbers and sequences, and to study
          the development of life itself.
        </p>
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
                <FaInfinity />
              </Card.Title>

              <Card.Text>
                Learn how to play Conways Game of Life by reading the rules
                first!
              </Card.Text>
              <Card.Link>
                <Link to="/rules">
                  <Button variant="dark" block>
                    Rules
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
              <Card.Text>Play the game!</Card.Text>
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
