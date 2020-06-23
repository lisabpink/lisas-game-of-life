import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaInfoCircle, FaInfinity, FaGamepad, FaHeart } from "react-icons/fa";
// import { IconName } from "react-icons/bs";

export default function Welcome(props) {
  return (
    <div className="Container">
      <div className="WelcomeHeader">
        <h1>
          I <FaHeart /> Life
        </h1>
      </div>
      <div className="Welcome">
        <CardGroup>
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
      </div>
    </div>
  );
}
