import React from 'react';
import { handleRandomNumber } from '../../service';
import ButtonSytle from '../ButtonCSS/ButtonStyle.module.css';
import NewPlayStyle from '../NewPlay/NewPlay.module.css';

function NewPlay(props) {

    let setNumber = props.setters;
    let randomColors = props.randomColors;
    const [visible, setVisible] = React.useState("new");

    return (
        <div className={NewPlayStyle.box}>

            {visible === 'showBt'
                ?
                <h1>MasterMind</h1>
                :
                <div className={NewPlayStyle.showColors}>
                    {randomColors.map(data => {
                        return <div className={`colorCircle colorCircle${data}`}></div>
                    })}
                </div>
            }
            {visible === "new"
                ?
                <button className={ButtonSytle.but} onClick={() => {
                    handleRandomNumber(setNumber);
                    setVisible("showBt")
                }}>New Play</button>
                :
                <button className={ButtonSytle.but} onClick={() => {
                    setVisible("new")
                }}>Solve</button>
            }
        </div>
    )
}

export default NewPlay;