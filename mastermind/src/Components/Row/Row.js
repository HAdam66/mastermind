import React from 'react';
import '../Container/Container.scss';

function Row(props) {

    let randomColors = props.randomColors;
    let perfectHit = 'perfectHit';
    let goodHit = 'goodHit';
    let hitColor = "hit";
    let chooseColor = props.chooseColor;

    const [color1, setColor1] = React.useState();
    const [color2, setColor2] = React.useState();
    const [color3, setColor3] = React.useState();
    const [color4, setColor4] = React.useState();

    return (
        <div className='box'>
            <button disabled={color1 === undefined || color2 === undefined || color3 === undefined || color4 === undefined} onClick={() => {

            }}>Done</button>
            <div className='chooseBox'>
                <div className={`colorCircle colorCircle${color1}`} onClick={() => setColor1(chooseColor)}></div>
                <div className={`colorCircle colorCircle${color2}`} onClick={() => setColor2(chooseColor)}></div>
                <div className={`colorCircle colorCircle${color3}`} onClick={() => setColor3(chooseColor)}></div>
                <div className={`colorCircle colorCircle${color4}`} onClick={() => setColor4(chooseColor)}></div>
            </div>
            <div className='hitsContainer'>
                <div className='hitsBox'>
                    {randomColors.forEach(data => {
                        if(data === color1){
                            return hitColor = "perfectHit";                           
                        }
                    })}
                    <div className={`${hitColor}`}></div>  
                    <div className={`${hitColor}`}></div>  
                </div>
                <div className='hitsBox'>
                    <div className={`${hitColor}`}></div>
                    <div className={`${hitColor}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Row;