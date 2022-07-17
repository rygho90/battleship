import ship from './ship'
import gameboard from './gameboard'
import player from './player'
import './styles.css'

// Grid stuff
const startBtn = document.querySelector('[data-start-btn]')
const computerGrid = document.querySelector('[data-computer-grid]')
const humanGrid = document.querySelector('[data-human-grid]')
const computerSquares = [];
const humanSquares = []

const displayController = (() => {
    const createBoard = (grid, squares) => {
        for (let i = 0; i < 100; i++) {
            const square = document.createElement('div')
            square.setAttribute('data-num', i)
            squares.push(square)
            grid.append(square)
        }
    }

    const hideElement = (element) => {
        element.classList.add('hide')
    }

    const renderGameBoard = (board, squares) => {
        board.filledCoords.forEach(coord => {
            console.log(coord)
            squares[coord].style.backgroundColor = 'black'
            squares[coord].style.borderColor = 'white'
        })
    }

    const updateShipBoxes = (player) => {
        player.shipList.forEach(ship => {
            const box = document.querySelector(`[data-${player.type}-${ship.name}]`)
            box.classList.remove('ship-sunk')
            box.classList.remove('ship-alive')
            box.classList.remove('ship-selected')

            if (ship.isSunk()) {
                box.classList.add('ship-sunk')
                return
            }
            if (ship.placed) {
                box.classList.add('ship-alive')
                return
            }
            if (ship.selected) {
                box.classList.add('ship-selected')
            }
        })
    }
   
    return {
        createBoard,
        hideElement,
        renderGameBoard,
        updateShipBoxes
    }
})();

const gameController = (() => {

    const initializeGame = () => {
        const computerBoard = gameboard()
        const humanBoard = gameboard()
        const computer = player(computerBoard, 'computer')
        const human = player(humanBoard, 'human')

        computer.populateShips()
        human.populateShips()

        computer.randomPlacement(computerBoard)
        //computer.logShipList()
        
        human.randomPlacement(humanBoard)
        //human.logShipList()

        displayController.renderGameBoard(computerBoard, computerSquares)
        displayController.updateShipBoxes(computer)
        displayController.renderGameBoard(humanBoard, humanSquares)
        displayController.updateShipBoxes(human)
    }

    return {
        initializeGame
    }
})();

function handleStart() {
    displayController.hideElement(startBtn)
    gameController.initializeGame()
}

displayController.createBoard(computerGrid, computerSquares)
displayController.createBoard(humanGrid, humanSquares)
startBtn.addEventListener('click', handleStart)