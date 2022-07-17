const ship = (shipLength) => {
    const placed = false
    const beenHit = []
    const location = []

    const hit = (coordinate) => {
        if (coordinateArr.includes(coordinate)) beenHit.push(coordinate)
    }

    const isSunk = () => {
        return (beenHit.length === shipLength) ? true : false
    }

    return {placed, shipLength, beenHit, location, hit, isSunk}
}

export default ship