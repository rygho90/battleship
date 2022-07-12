const shipFactory = (coordinateArr) => {
    const shipLength = coordinateArr.length
    const beenHit = [];

    const hit = (coordinate) => {
        if (coordinateArr.includes(coordinate)) beenHit.push(coordinate)
    }

    const isSunk = () => {
        return (beenHit.length === shipLength) ? true : false;
    } 

    return {shipLength, beenHit, hit, isSunk}
}

const gameboardFactory = () => {

    const placeShip = (direction, shipLength, startingCoordinate) => {
        if (direction === 'horizontal') {
            // ...
        }
    }
}

export { shipFactory, gameboardFactory }