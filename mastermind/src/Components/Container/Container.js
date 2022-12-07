import React from 'react';
import ChooseColors from '../ChooseColors/ChooseColors';
import '../Container/Container.scss';
import FindOut from '../FindOut/FindOut';
import Row from '../Row/Row';

function Container() {

    const minVal = 1;
    const maxVal = 8;
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [number3, setNumber3] = React.useState();
    const [number4, setNumber4] = React.useState();
    const [color1, setColor1] = React.useState();
    const [color2, setColor2] = React.useState();
    const [color3, setColor3] = React.useState();
    const [color4, setColor4] = React.useState();
    const [row1, setRow1] = React.useState([color1, color2, color3, color4]);
    const [row2, setRow2] = React.useState([color1, color2, color3, color4]);
    const [row3, setRow3] = React.useState([color1, color2, color3, color4]);
    const [row4, setRow4] = React.useState([color1, color2, color3, color4]);
    const [row5, setRow5] = React.useState([color1, color2, color3, color4]);
    const [row6, setRow6] = React.useState([color1, color2, color3, color4]);
    const [row7, setRow7] = React.useState([color1, color2, color3, color4]);
    const [row8, setRow8] = React.useState([color1, color2, color3, color4]);
    const [row9, setRow9] = React.useState([color1, color2, color3, color4]);
    const [row10, setRow10] = React.useState([color1, color2, color3, color4]);
    const [chooseColor, setChooseColor] = React.useState();
    
    
    const handleRandomNumber = () => {
        setNumber1(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
        setNumber2(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
        setNumber3(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
        setNumber4(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
    }

    return (
        <div className='mainContainer'>
            <div className='colorsContainer'>
                <FindOut randomColors={[number1, number2, number3, number4]}/>
                <ChooseColors setChooseColor={setChooseColor} />
                <button onClick={() => handleRandomNumber()}>New Play</button>
                {/* <div className='chooseBox'>
                    <div className={`colorCircle colorCircle${color1}`} onClick={() => setColor1(chooseColor)}></div>
                    <div className={`colorCircle colorCircle${color2}`} onClick={() => setColor2(chooseColor)}></div>
                    <div className={`colorCircle colorCircle${color3}`} onClick={() => setColor3(chooseColor)}></div>
                    <div className={`colorCircle colorCircle${color4}`} onClick={() => setColor4(chooseColor)}></div>
                </div> */}
            </div>
            <div className='rowContainer'>
                <Row row={row1} setRow={setRow1} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row2} setRow={setRow2} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row3} setRow={setRow3} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row4} setRow={setRow4} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row5} setRow={setRow5} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row6} setRow={setRow6} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row7} setRow={setRow7} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row8} setRow={setRow8} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row9} setRow={setRow9} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
                <Row row={row10} setRow={setRow10} chooseColor={chooseColor} color={[color1, color2, color3, color4]}  randomColors={[number1, number2, number3, number4]}/>
            </div>
        </div>
    )
}

export default Container