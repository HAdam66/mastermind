import React from 'react';
import ChooseColors from '../ChooseColors/ChooseColors';
import '../Container/Container.css';
import FindOut from '../FindOut/FindOut';
import NewPlayBut from '../NewPlayBut/NewPlayBut';
import Row from '../Row/Row';

function Container() {

    
    const [number1, setNumber1] = React.useState();
    const [number2, setNumber2] = React.useState();
    const [number3, setNumber3] = React.useState();
    const [number4, setNumber4] = React.useState();
    const [chooseColor, setChooseColor] = React.useState();
    let numberSetters = [setNumber1, setNumber2, setNumber3, setNumber4];

    return (
        <div className='mainContainer'>
            <div className='colorsContainer'>
                <FindOut randomColors={[number1, number2, number3, number4]}/>
                <ChooseColors setChooseColor={setChooseColor} />
                <NewPlayBut setters={numberSetters}/>
            </div>
            <div className='rowContainer'>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
                <Row chooseColor={chooseColor} randomColors={[number1, number2, number3, number4]}/>
            </div>
        </div>
    )
}

export default Container