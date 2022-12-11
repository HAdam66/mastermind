export function handleRandomNumber(setNumber) {
    const minVal = 1;
    const maxVal = 8;

    setNumber.map(setter => {
        return setter(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
    })
}
