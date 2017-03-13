import React from 'react';
import Square1 from './Square1.jsx';
import Square2 from './Square2.jsx';
import Square3 from './Square3.jsx';
import Square4 from './Square4.jsx';
import Square5 from './Square5.jsx';
import Square6 from './Square6.jsx';
import Square7 from './Square7.jsx';
import Square8 from './Square8.jsx';
import Square9 from './Square9.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }

  placeMarker() {

    var value = document.getElementById('position').value;
    var move = document.getElementById('playerMove').value;
    var position = document.getElementById(value);
    console.log('which square', value)
    console.log('player move', move)
    console.log('position', position)
    if(position.innerHTML !== null) {
      position.innerHTML = move;
    } else {
      alert('cant do that')
    }
  }


  render() {
    return (
      <div>
        <form> 
          <input id="position" placeholder="Place square number here">
          </input>
          <input id="playerMove" placeholder="Place symbol here">
          </input>
          <input type="button" value="Go" onClick={() => this.placeMarker()}></input>
        </form>
        <div className = "row">
          <Square1 />
          <Square2 />
          <Square3 />
        </div>
         <div className = "row">
          <Square4 />
          <Square5/>
          <Square6 />
        </div>
        <div className = "row">
          <Square7 />
          <Square8 />
          <Square9 />
        </div>
      </div>
    )
  }
}