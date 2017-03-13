import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }



  render() {
    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));