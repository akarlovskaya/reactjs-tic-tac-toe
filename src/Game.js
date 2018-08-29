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
    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        return (
            <div>
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

class Square extends Component {
    // add x when click on button
    // it means we change state of button - change state of value
    // first it was nothing, when - X

    // define initial state of button
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    // add click handler
    handleClick() {
        // when a button clicked, setState called. It tells React to re-render component and update clicked button state (child components will be updated too if they present)
        this.setState({
            value: 'X'
        });
    }

    render() {
        return (
            <button
                className="square"
                onClick={this.handleClick.bind(this)}>
                {/* show state of value here */}
                {this.state.value}
            </button>
        )
    }
}
