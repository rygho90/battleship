import gameboard from './gameboard'

const player = (type, turn) => {

    const board = gameboardFactory()

    return {type, turn, board}
}

export default player