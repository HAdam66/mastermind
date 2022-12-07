import React from 'react'

function FindOut(props) {

    let randomColors = props.randomColors;
    
    return (
        <div className='box'>
            {randomColors.map(data => {
                return <div className={`colorCircle colorCircle${data}`}></div>
            })}
        </div>
    )
}

export default FindOut