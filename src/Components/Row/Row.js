import React from 'react';
import '../Container/Container.css';
import DoneBut from '../DoneBut/DoneBut';
import RowStyle from '../Row/Row.module.css';

function Row(props) {

    let randomColors = props.randomColors;
    let chooseColor = props.chooseColor;
    let rowNum = props.rowNumber;
    const [color1, setColor1] = React.useState();
    const [color2, setColor2] = React.useState();
    const [color3, setColor3] = React.useState();
    const [color4, setColor4] = React.useState();
    const [done, setDone] = React.useState();
    let ready = 'ready';
    let colorsArray = [color1, color2, color3, color4];
    return (
        <div className={RowStyle.box}>
            <h2>{rowNum}</h2>
            <div className={RowStyle.circleBox}>
                <button disabled={done === ready} className={`colorCircle colorCircle${color1}`} onClick={() => setColor1(chooseColor)}></button>
                <button disabled={done === ready} className={`colorCircle colorCircle${color2}`} onClick={() => setColor2(chooseColor)}></button>
                <button disabled={done === ready} className={`colorCircle colorCircle${color3}`} onClick={() => setColor3(chooseColor)}></button>
                <button disabled={done === ready} className={`colorCircle colorCircle${color4}`} onClick={() => setColor4(chooseColor)}></button>
            </div>
            <div className={RowStyle.buttonBox}>
                <DoneBut randomColors={randomColors} colorsArray={colorsArray} done={done} setDone={setDone} />
            </div>
        </div>
    )
}

export default Row;