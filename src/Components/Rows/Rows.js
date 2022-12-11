import React from 'react';
import Row from '../Row/Row';
import RowsStyle from './Rows.module.css';

function Rows(props) {
    let chooseColor = props.chooseColor;
    let randomColors = props.randomColors;
    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<Row rowNumber={i+1} chooseColor={chooseColor} randomColors={randomColors} />)
    }
    return (
        <div className={RowsStyle.box}>
            {rows}
        </div>
    )
}

export default Rows