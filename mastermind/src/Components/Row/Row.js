import React from 'react';
import '../Container/Container.css';
import DoneBut from '../DoneBut/DoneBut';

function Row(props) {

    let randomColors = props.randomColors;
    let perfectHit = 'perfectHit';
    let goodHit = 'goodHit';
    let hitColor = "hit";
    let hitColor1 = "hit";
    let hitColor2 = "hit";
    let hitColor3 = "hit";
    let hitColor4 = "hit";
    let chooseColor = props.chooseColor;
    const [color1, setColor1] = React.useState();
    const [color2, setColor2] = React.useState();
    const [color3, setColor3] = React.useState();
    const [color4, setColor4] = React.useState();
    
    let colorsArray = [color1,color2,color3,color4];

    return (
        <div className='box'>
            <DoneBut />
            {/* {color1 !== undefined && color2 !== undefined && color3 !== undefined && color4 !== undefined ?
            <DoneBut />
            :
            null
            } */}
            <div className='chooseBox'>
                <div className={`colorCircle colorCircle${color1}`} onClick={() => setColor1(chooseColor)}></div>
                <div className={`colorCircle colorCircle${color2}`} onClick={() => setColor2(chooseColor)}></div>
                <div className={`colorCircle colorCircle${color3}`} onClick={() => setColor3(chooseColor)}></div>
                <div className={`colorCircle colorCircle${color4}`} onClick={() => setColor4(chooseColor)}></div>
            </div>
            <div className='hitsContainer'>
                <div className='hitsBox'>
                {randomColors.forEach(data => {                        
                        if(colorsArray[0] === randomColors[0]){
                            return hitColor1 = "perfectHit";                           
                        }else if(data === color1){
                            return hitColor1 = "goodHit"
                        }                       
                    })}
                    {randomColors.forEach(data => {                        
                        if(colorsArray[1] === randomColors[1]){
                            return hitColor2 = "perfectHit";                           
                        }else if(data === color2){
                            return hitColor2 = "goodHit"
                        }                                
                    })}
                    {randomColors.forEach(data => {                        
                        if(colorsArray[2] === randomColors[2]){
                            return hitColor3 = "perfectHit";                           
                        }else if(data === color3){
                            return hitColor3 = "goodHit"
                        }                                
                    })}
                    {randomColors.forEach(data => {                        
                        if(colorsArray[3] === randomColors[3]){
                            return hitColor4 = "perfectHit";                           
                        }else if(data === color4){
                            return hitColor4 = "goodHit"
                        }                                
                    })}
                    <div className={`${hitColor1}`}></div>  
                    <div className={`${hitColor2}`}></div>  
                    <div className={`${hitColor3}`}></div>
                    <div className={`${hitColor4}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Row;