// import ship from './ship'

const gameboard = () => {

    const filledCoords = []
    const missedAttacks = []
    const hitAttacks = []

    const placeShip = (direction, ship, startPos) => {
        const coordinateArr = []

        //Horizontal placement
        if (direction === 1) {
            let row = Math.floor(startPos / 10)
            let endPos = startPos + ship.shipLength

            if (row === Math.floor(endPos / 10)) {
                for (let i = 0; i < ship.shipLength; i++) {
                    coordinateArr.push(i + startPos)
                    if (filledCoords.includes(i + startPos)) {
                        //console.log("Failed to place ship: other ship in way.")
                        return
                    } 
                }
                ship.placed = true
                coordinateArr.forEach(coord => ship.location.push(coord))
                coordinateArr.forEach(coord => filledCoords.push(coord))
            } else {
                //console.log("Failed to place ship: off edge.")
                return
            }
        } 

        // Vertical placement
        else {
            let endPos = startPos + (ship.shipLength * 10)

            if (endPos <= 99) {
                for(let i = 0; i < (ship.shipLength * 10); i+=10) {
                    coordinateArr.push(i + startPos)
                    if (filledCoords.includes(i + startPos)) {
                        //console.log("Failed to place ship: other ship in way.")
                        return
                    } 
                }
                ship.placed = true
                coordinateArr.forEach(coord => ship.location.push(coord))
                coordinateArr.forEach(coord => filledCoords.push(coord))
            } else {
                //console.log("Failed to place ship: off edge.")
                return
            }
        }
    }

    const receiveAttack = (coordinate) => {
        if (filledCoords.includes(coordinate)) {
            console.log("Received attack. It's a hit!")
            hitAttacks.push(coordinate)
        } else {
            console.log("Received attack. It's a miss!")
            missedAttacks.push(coordinate)
        }
        
    }

    return {filledCoords, missedAttacks, hitAttacks, placeShip, receiveAttack}
}

export default gameboard