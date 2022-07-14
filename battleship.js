import ship from './ship'
import gameboard from './gameboard'

const playerFactory = (playerType, activeTurn) => {

    const playerBoard = gameboardFactory()

    return {playerType, activeTurn, playerBoard}
}

export { shipFactory, gameboardFactory, playerFactory }