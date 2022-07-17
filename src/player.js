import gameboard from './gameboard'
import ship from './ship'

const player = (board, type) => {
    const shipList = [];

    const populateShips = () => {
        const destroyer = ship('destroyer')
        const submarine = ship('submarine')
        const cruiser = ship('cruiser')
        const battleship = ship('battleship')
        const carrier = ship('carrier')

        shipList.push(destroyer)
        shipList.push(submarine)
        shipList.push(cruiser)
        shipList.push(battleship)
        shipList.push(carrier)
    }

    const logShipList = () => {
        console.log(shipList)
    }

    const randomPlacement = (board) => {
        let placedNum = 0;

        while (placedNum < shipList.length) {
            shipList.forEach(ship => {
                let randomPos = Math.floor(Math.random() * (99 - 0) + 0)
                let randomDirection = Math.floor(Math.random() * (2 - 1 + 1) + 1)

                if (!ship.placed) {
                    board.placeShip(randomDirection, ship, randomPos)
                    if (ship.placed) placedNum++
                }
            })
        }
    }

    return {
        board,
        type,
        shipList,
        populateShips,
        randomPlacement,
        logShipList
    }
}

export default player