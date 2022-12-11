export function handleRandomNumber(setNumber) {
    const minVal = 1;
    const maxVal = 8;

    setNumber.map(setter => {
        return setter(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
    })
}

export function win(hitArray){
    let mind = function (data) {
        return data === 'black'
    }
    return hitArray.every(mind) === true
    
}