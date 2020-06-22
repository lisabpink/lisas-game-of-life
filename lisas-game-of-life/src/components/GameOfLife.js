import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaHome, FaInfinity, FaGamepad } from "react-icons/fa";

export default class GameOfLife extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>Conways Game of Life</h1>
        </div>
        <p>Pretend theres a game right here- k thx!</p>
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
                  Learn how to play the really cool super awesome game by
                  reading the rules first!
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
          </CardGroup>
        </footer>
      </div>
    );
  }
}
