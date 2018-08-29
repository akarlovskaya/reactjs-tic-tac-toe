import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <Board />
            </div>
        )
    }
}
export default Game;


class Board extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={ () => this.handleClick(i) }
            />
        )
    }

    handleClick(i) {
        // create new array
        const squares = this.state.squares.slice();
        // return if there is a winner or a Square is already filled
        if ( calculateWinner(this.state.squares) || squares[i] ) {
            return;
        }
        // define X or O
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }

    render() {
        let status;
        const winner = calculateWinner(this.state.squares);

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        if (!winner) {
            status = '';
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                  {this.renderSquare(0)}
                  {this.renderSquare(1)}
                  {this.renderSquare(2)}
                </div>
                <div className="board-row">
                  {this.renderSquare(3)}
                  {this.renderSquare(4)}
                  {this.renderSquare(5)}
                </div>
                <div className="board-row">
                  {this.renderSquare(6)}
                  {this.renderSquare(7)}
                  {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

// make Square component as functional component
function Square(props) {
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

// helper function to determine a winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(squares[a]);
      return squares[a];
    }
  }
  return null;
}
