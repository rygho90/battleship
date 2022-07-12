const shipFactory = (coordinateArr) => {
    const shipLength = coordinateArr.length
    const beenHit = [];
    let sunk = false;

    const hit = (coordinate) => {
        if (coordinateArr.includes(coordinate)) beenHit.push(coordinate)
    }

    const isSunk = () => {
        return (beenHit.length === shipLength) ? true : false;
    } 

    return {shipLength, beenHit, sunk, hit, isSunk}
}

export { shipFactory }