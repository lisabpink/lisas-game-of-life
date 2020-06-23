import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaInfinity } from "react-icons/fa";

const rows = 50;
const cols = 50;
let arr = [];
for (let i = 0; i < rows; i++) {
  arr[i] = [];
}
for (let j = 0; j < rows; j++) {
  for (let k = 0; k < cols; k++) {
    arr[j][k] = 0;
  }
}
export default class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.cellsize = 10;
    this.height = 500;
    this.width = 500;
    this.state = {
      continueAnimation: true,
      cells: arr,
      generation: 0
    };
  }
  draw = () => {
    const canv = this.refs.canvas;
    const ctx = canv.getContext("2d");
    for (let x = 0; x < this.width; x += this.cellsize) {
      ctx.moveto(x, 0);
      ctx.lineto(x, this.height);
    }

    for (let y = 0; y < this.height; y += this.cellsize) {
      ctx.moveto(0, y);
      ctx.lineto(this.width, y);
    }
    ctx.stroke();

    for (let j = 0; j < this.height / this.cellsize; j++) {
      for (let k = 0; k < this.width / this.cellsize; k++) {
        if (this.state.cells[j][k] === 1) {
          ctx.fillRect(
            j * this.cellsize,
            k * this.cellsize,
            this.cellsize,
            this.cellsize
          );
        } else {
          ctx.fillRect(
            j * this.cellsize,
            k * this.cellsize,
            this.cellsize,
            this.cellsize
          );
        }
      }
    }
  };

  update = () => {
    let mirrorCells = this.state.cells;
    for (let j = 0; j < this.height / this.cellsize; j++) {
      for (let k = 0; k < this.width / this.cellsize; k++) {
        let liveneighbors = 0;
        liveneighbors += this.state.cells[j - 1][k - 1].living;
        liveneighbors += this.state.cells[j - 1][k].living;
        liveneighbors += this.state.cells[j - 1][k + 1].living;
        liveneighbors += this.state.cells[j][k - 1].living;
        liveneighbors += this.state.cells[j][k + 1].living;
        liveneighbors += this.state.cells[j + 1][k - 1].living;
        liveneighbors += this.state.cells[j + 1][k].living;
        liveneighbors += this.state.cells[j + 1][k + 1].living;
        if (this.state.cells[j][k].living === 0) {
          switch (liveneighbors) {
            case 3:
              mirrorCells[j][k].toggle();
              break;
            default:
              mirrorCells[j][k].living = 0;
          }
        } else if (this.state.cells[j][k].living === 1) {
          switch (liveneighbors) {
            case 0:
            case 1:
              mirrorCells[j][k].toggle();
              break;
            case 2:
            case 3:
              mirrorCells[j][k].living = 1;
              break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
              mirrorCells[j][k].toggle();
              break;
            default:
              mirrorCells[j][k].living = 0;
          }
        } else {
          console.log("Something went wrong while updating!");
        }
      }
    }
    this.setState({ cells: mirrorCells });
  };

  tick = () => {
    this.props.nextgen();
  };

  componentDidMount() {}

  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>Conways Game of Life</h1>
        </div>
        <p>Pretend theres a game right here- k thx!</p>
        <footer>
          <canvas ref="canvas" width={this.width} height={this.height} />
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
          </CardGroup>
        </footer>
      </div>
    );
  }
}
