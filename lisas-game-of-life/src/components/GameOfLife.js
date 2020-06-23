import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaInfinity } from "react-icons/fa";

class Cell {
  constructor(clickable, living, xcoord, ycoord) {
    this.clickable = clickable;
    this.living = living;
    this.x = xcoord;
    this.y = ycoord;
  }
  toggle = () => {
    if (this.living === 0) {
      this.living = 1;
    } else {
      this.living = 0;
    }
  };
}

const rows = 50;
const cols = 50;
let arr = [];
for (let i = 0; i < rows; i++) {
  arr[i] = [];
}
for (let j = 0; j < rows; j++) {
  for (let k = 0; k < cols; k++) {
    arr[j][k] = new Cell(true, 0, 10 * j, 10 * k);
  }
}
export default class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.cellsize = 10;
    this.height = 500;
    this.width = 500;
    this.state = {
      continueAnimation: false,
      cells: arr,
      generation: 0
    };
  }

  nextgen = () => {
    this.setState({ generation: this.state.generation + 1 });
  };

  draw = () => {
    const canv = this.refs.canvas;
    const ctx = canv.getContext("2d");
    for (let x = 0; x < this.width; x += this.cellsize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
    }

    for (let y = 0; y < this.height; y += this.cellsize) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
    }
    ctx.strokeStyle = "red";
    ctx.stroke();

    for (let j = 0; j < this.height / this.cellsize; j++) {
      for (let k = 0; k < this.width / this.cellsize; k++) {
        if (this.state.cells[j][k] === 1) {
          ctx.fillStyle = "#FF0000";
          ctx.fillRect(
            j * this.cellsize,
            k * this.cellsize,
            this.cellsize,
            this.cellsize
          );
        } else {
          ctx.fillStyle = "pink";
          ctx.fillRect(
            j * this.cellsize,
            k * this.cellsize,
            this.cellsize - 1,
            this.cellsize - 1
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
        if (j > 0) {
          if (k > 0) {
            liveneighbors += this.state.cells[j - 1][k - 1].living;
          }
          if (k < this.width / this.cellsize - 1) {
            liveneighbors += this.state.cells[j - 1][k + 1].living;
          }
          liveneighbors += this.state.cells[j - 1][k].living;
        }
        if (k > 0) {
          if (j < this.height / this.cellsize - 1) {
            liveneighbors += this.state.cells[j + 1][k - 1].living;
          }
          liveneighbors += this.state.cells[j][k - 1].living;
        }
        if (j < this.height / this.cellsize - 1) {
          if (k < this.width / this.cellsize - 1) {
            liveneighbors += this.state.cells[j + 1][k + 1].living;
          }
          liveneighbors += this.state.cells[j + 1][k].living;
        }
        if (k < this.width / this.cellsize - 1) {
          liveneighbors += this.state.cells[j][k + 1].living;
        }
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
    if (this.state.continueAnimation) {
      this.draw();
      this.update();
      this.nextgen();
      requestAnimationFrame(this.tick);
    }
  };

  start = e => {
    this.setState({ continueAnimation: true });
    requestAnimationFrame(this.tick);
  };

  stop = e => {
    this.setState({ continueAnimation: false });
  };

  componentDidMount() {
    const canv = this.refs.canvas;
    const lft = canv.offsetLeft;
    const top = canv.offsetTop;
    let cells = this.state.cells;
    canv.addEventListener("click", e => {
      const x = e.pageX - lft;
      const y = e.pageY - top;
      cells.forEach(cell => {
        if (x > cell.x && x < cell.x + 10 && y > cell.y && y < cell.y + 10) {
          cell.toggle();
        }
      });
      this.setState({ cells });
    });
    requestAnimationFrame(this.tick);
  }

  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>Conways Game of Life</h1>
        </div>
        <div className Game>
          <Button variant="light" size="sm" onClick={this.start}>
            Start
          </Button>
          <Button variant="light" size="sm" onClick={this.stop}>
            Stop
          </Button>
          <p>Generations: {this.state.generation}</p>
          <canvas ref="canvas" width={this.width} height={this.height} />
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
