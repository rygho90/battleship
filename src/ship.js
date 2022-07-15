const ship = (coordinateArr) => {
    const shipLength = coordinateArr.length
    const beenHit = []
    const shipLocation = coordinateArr

    const hit = (coordinate) => {
        if (coordinateArr.includes(coordinate)) beenHit.push(coordinate)
    }

    const isSunk = () => {
        return (beenHit.length === shipLength) ? true : false
    }

    return {shipLength, beenHit, shipLocation, hit, isSunk}
}

export default ship