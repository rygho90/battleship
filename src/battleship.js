import ship from './ship'
import gameboard from './gameboard'
import player from './player'
import './styles.css'

const startBtn = document.querySelector('[data-start-btn]')
const computerGrid = document.querySelector('[data-computer-grid]')
const humanGrid = document.querySelector('[data-human-grid]')

const displayController = (() => {
    const createBoard = (grid) => {
        for (let i = 0; i < 100; i++) {
            const square = document.createElement('div')
            square.setAttribute('data-num', i)
            grid.append(square)
        }
    }

    const hideElement = (element) => {
        element.classList.add('hide')
    }

    return {
        createBoard,
        hideElement
    }
})();

const gameController = (() => {

    const initializeGame = () => {
        const computerBoard = gameboard()
        const humanBoard = gameboard()
        const computer = player(computerBoard)
        const human = player(humanBoard)

        computer.populateShips()
        
        computer.randomPlacement(computerBoard)
        console.log(computerBoard.filledCoords)
        computer.logShipList()
    }

    return {
        initializeGame
    }
})();

function handleStart() {
    displayController.hideElement(startBtn)
    gameController.initializeGame()
}

displayController.createBoard(computerGrid)
displayController.createBoard(humanGrid)
startBtn.addEventListener('click', handleStart)