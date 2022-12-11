import React from 'react';
import Hit from '../Hit/Hit';
import ButtonStyle from '../ButtonCSS/ButtonStyle.module.css';

function DoneBut(props) {
    let randomColors = props.randomColors;
    let colorsArray = props.colorsArray;
    let setDone = props.setDone;
    let done = props.done;
    let ready = 'ready';


    return (
        <div className={ButtonStyle.box}>
            {done !== ready
                ?
                <button className={ButtonStyle.but} disabled={done === ready} onClick={() => { setDone(ready) }}>Done</button>
                :
                <Hit randomColors={randomColors} colorsArray={colorsArray} />
            }
        </div>
    )
}

export default DoneBut