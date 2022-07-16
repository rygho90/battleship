import ship from './ship'
import gameboard from './gameboard'
import player from './player'
import './styles.css'

const computerGrid = document.querySelector('[data-computer-grid]')
const humanGrid = document.querySelector('[data-human-grid]')

const computerBoard = gameboard();
const humanBoard = gameboard();

function createBoard(grid) {
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div')
        grid.append(square)
    }
}

createBoard(computerGrid)
createBoard(humanGrid)