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
        board.missedAttacks.forEach(coord => {
            squares[coord].style.backgroundColor = 'blue'
        })
        board.hitAttacks.forEach(coord => {
            squares[coord].style.backgroundColor = 'red'
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
    const computerBoard = gameboard()
    const humanBoard = gameboard()
    const computer = player(computerBoard, 'computer')
    const human = player(humanBoard, 'human')

    const initializeGame = () => {
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

    const humanRound = () => {
        const hoverEffect = (e) => {
            computerSquares.forEach(square => square.classList.remove('hovering'))
            e.target.classList.add('hovering')
        }

        const shoot = (e) => {
            computerBoard.receiveAttack(parseInt(e.target.dataset.num))
            displayController.renderGameBoard(computerBoard, computerSquares)
        }

        computerSquares.forEach(square => {
            square.addEventListener('mouseover', hoverEffect)
        })

        computerSquares.forEach(square => {
            square.addEventListener('click', shoot)
        })
    }

    return {
        initializeGame,
        humanRound
    }
})();

function handleStart() {
    displayController.hideElement(startBtn)
    gameController.initializeGame()
    gameController.humanRound()
}

displayController.createBoard(computerGrid, computerSquares)
displayController.createBoard(humanGrid, humanSquares)
startBtn.addEventListener('click', handleStart)