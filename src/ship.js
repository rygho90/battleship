const ship = (name) => {
    const shipIndex = {
        'carrier': 5,
        'battleship': 4,
        'cruiser': 3,
        'submarine': 3,
        'destroyer': 2
    }

    const shipLength = shipIndex[name]
    const selected = false
    const placed = false
    const beenHit = []
    const location = []


    const hit = (coordinate) => {
        if (coordinateArr.includes(coordinate)) beenHit.push(coordinate)
    }

    const isSunk = () => {
        return (beenHit.length === shipLength) ? true : false
    }

    return {name, placed, shipLength, selected, beenHit, location, hit, isSunk}
}

export default ship