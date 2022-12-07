import React from 'react'

function Colors(props) {

    const chooseColors = [1, 2, 3, 4, 5, 6, 7, 8];
    let setChooseColor = props.setChooseColor;

    return (
        <div className='colorBox'>
            {chooseColors.map(data => {
                return <div className={`colorCircle colorCircle${data}`} onClick={() => setChooseColor(data)}></div>
            })}
        </div>
    )
}

export default Colors