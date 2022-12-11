import React from 'react';
import { win } from '../../service';
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
            randomColors.filter(element => {
                if (randomColors[i] === colorsArray[i]) {
                    return hitArray[i] = 'black'
                } else if (element === colorsArray[i]) {

                    return hitArray[i] = 'white'
                }
            })
        }
    }


    return (
        <div className={HitStyle.box}>
            {hitArray.sort().map(hit => {
                return <div className={hit}></div>
            })}
            {win(hitArray) === true
                ?
                alert("you win")
                :
                null}
        </div>
    )
}

export default Hit