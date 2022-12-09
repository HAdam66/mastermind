import React from 'react';
import {handleRandomNumber} from '../../service';

function NewPlayBut(props) {

    let setNumber = props.setters;

  return (
    <button onClick={() => {handleRandomNumber(setNumber)}}>New Play</button>
  )
}

export default NewPlayBut