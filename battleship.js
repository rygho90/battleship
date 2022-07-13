const shipFactory = (coordinateArr) => {
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

const gameboardFactory = () => {
    const allCoords = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', // 0-9
                       'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', // 10-19
                       'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', // 20-29
                       'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', // 30-39
                       'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', // 40-49
                       'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', // 50-59
                       'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', // 60-69
                       'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', // 70-79
                       'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', // 80-89
                       'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'] // 90-99

    const filledCoords = []

    const placeShip = (direction, shipLength, startPos) => {
        const coordinateArr = []

        //Horizontal placement
        if (direction === 'horizontal') {
            let row = Math.floor(startPos / 10)
            let endPos = startPos + shipLength

            if (row === Math.floor(endPos / 10)) {
                for (let i = 0; i < shipLength; i++) {
                    coordinateArr.push(allCoords[i + startPos])
                    if (filledCoords.includes(allCoords[i + startPos])) return
                }
     
                coordinateArr.forEach(coord => filledCoords.push(coord))
                return shipFactory(coordinateArr)
            } else {
                return
            }
        } 

        // Vertical placement
        else {
            let endPos = startPos + (shipLength * 10)

            if (endPos <= 99) {
                for(let i = 0; i < (shipLength * 10); i+=10) {
                    coordinateArr.push(allCoords[i + startPos])
                    if (filledCoords.includes(allCoords[i + startPos])) return
                }
                coordinateArr.forEach(coord => filledCoords.push(coord))
                return shipFactory(coordinateArr)
            } else {
                return
            }
        }
    }

    return {placeShip}
}

export { shipFactory, gameboardFactory }