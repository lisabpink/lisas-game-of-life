import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaHome, FaInfinity, FaGamepad } from "react-icons/fa";

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
                Learn how to play the really cool super awesome game by reading
                the rules first!
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
