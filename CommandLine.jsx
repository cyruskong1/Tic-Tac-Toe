import React from 'react';

export default (props)=> (
  <div>
   <form> 
      <input id="position" placeholder="Place square number here">
      </input>
      <input id="playerMove" placeholder="Place symbol here">
      </input>
      <input type="button" value="Go" onClick={() => props.placeMarker()}></input>
    </form>
  </div>
)