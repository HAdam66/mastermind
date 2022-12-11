import React from 'react';
import HitStyle from '../Hit/Hit.module.css'

function Hit(props) {
    let hit1;
    let hit2;
    let hit3;
    let hit4;
    let hitArray = [hit1, hit2, hit3, hit4];
    let colorsArray = props.colorsArray;
    let randomColors = props.randomColors;
    for (let i = 0; i < 4; i++) {
        {
            randomColors.forEach(element => {
                if (element === colorsArray[i]) {
                    return hitArray[i] = 'white'
                } else if (randomColors[i] === colorsArray[i]) {
                    return hitArray[i] = 'black'
                }
            })
        }
    }


    return (
        <div className={HitStyle.box}>
            {hitArray.sort().map(hit => {
                return <div className={hit}></div>
            })}
        </div>
    )
}

export default Hit