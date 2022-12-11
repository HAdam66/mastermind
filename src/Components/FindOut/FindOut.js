import React from 'react';
import FindOutStyle from '../FindOut/FindOut.module.css';

function FindOut(props) {

    let randomColors = props.randomColors;
    return (
        <div className={FindOutStyle.box}>
            
            {randomColors.map(data => {
                return <div className={`colorCircle colorCircle${data}`}></div>
            })}
        </div>
    )
}

export default FindOut