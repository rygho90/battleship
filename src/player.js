import gameboard from './gameboard'
import ship from './ship'

const player = (board) => {
    const shipList = [];

    const populateShips = () => {
        const destroyer = ship(2)
        const submarine = ship(3)
        const cruiser = ship(3)
        const battleship = ship(4)
        const carrier = ship(5)

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
            console.log(`${placedNum} ships have been placed`)
        }

    }

    return {
        board,
        shipList,
        populateShips,
        randomPlacement,
        logShipList
    }
}

export default player