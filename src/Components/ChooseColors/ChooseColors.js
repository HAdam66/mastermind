import React from 'react';
import ChooseStyle from '../ChooseColors/Choose.module.css';

function Colors(props) {

    const chooseColors = [1, 2, 3, 4, 5, 6, 7, 8];
    let setChooseColor = props.setChooseColor;

    return (
        <div className={ChooseStyle.colorBox}>
            {chooseColors.map(data => {
                return <button className={`colorCircle colorCircle${data}`} onClick={() => setChooseColor(data)}></button>
            })}
        </div>
    )
}

export default Colors