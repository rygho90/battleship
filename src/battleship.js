import ship from './ship'
import gameboard from './gameboard'
import player from './player'
import './styles.css'

const startBtn = document.querySelector('[data-start-btn]')
const computerGrid = document.querySelector('[data-computer-grid]')
const humanGrid = document.querySelector('[data-human-grid]')
let computerSquares = []
let humanSquares = []

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

    const renderHumanBoard = (board, squares) => {
        board.filledCoords.forEach(coord => {
            squares[coord].style.backgroundColor = 'black'
            squares[coord].style.borderColor = 'white'
        })
        board.missedAttacks.forEach(coord => {
            squares[coord].style.backgroundColor = 'blue'
            squares[coord].style.borderColor = 'black'
        })
        board.hitAttacks.forEach(coord => {
            squares[coord].style.backgroundColor = 'red'
            squares[coord].style.borderColor = 'black'
        })
    }

    const renderComputerBoard = (board, squares) => {
        board.missedAttacks.forEach(coord => {
            squares[coord].style.backgroundColor = 'blue'
            squares[coord].style.borderColor = 'black'
        })
        board.hitAttacks.forEach(coord => {
            squares[coord].style.backgroundColor = 'red'
            squares[coord].style.borderColor = 'black'
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

    const showEndGameBox = (outcome) => {
        const endGameBox = document.querySelector('[data-end-game]')
        const endGameText = document.querySelector('[data-end-text]')
        
        endGameBox.classList.remove("hide")
        endGameText.textContent = `You ${outcome}!`
    }
   
    return {
        createBoard,
        hideElement,
        renderHumanBoard,
        renderComputerBoard,
        updateShipBoxes,
        showEndGameBox
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
        


        displayController.renderComputerBoard(computerBoard, computerSquares)
        displayController.updateShipBoxes(computer)
        displayController.renderHumanBoard(humanBoard, humanSquares)
        displayController.updateShipBoxes(human)

        placementRound()
    }

    const checkForWinner = () => {
        let computerSunk = 0;
        let humanSunk = 0;
        computer.shipList.forEach(ship => {
            if (ship.isSunk()) computerSunk++
        })
        if (computerSunk === 5) displayController.showEndGameBox('won')
        human.shipList.forEach(ship => {
            if (ship.isSunk()) humanSunk++
        })
        if (humanSunk === 5) displayController.showEndGameBox('lost')
    }

    const placementRound = () => {
    
        let placedNum = 0
        let selectedShip = 0
        let direction = 1
        human.shipList[selectedShip].selected = true
        displayController.updateShipBoxes(human)

        const hoverEffect = (e) => {
            const coord = parseInt(e.target.dataset.num)
            const placementLength = human.shipList[selectedShip].shipLength
            humanSquares.forEach(square => square.classList.remove('hovering'))

            if (direction === 1) {
                for (let i = coord; i < coord + placementLength; i++) {
                    humanSquares[i].classList.add('hovering')
                }
            } else {
                for (let i = coord; i < coord + (placementLength * 10); i+=10) {
                    humanSquares[i].classList.add('hovering')
                } 
            }
            
        }

        const placeShip = (e) => {
            const coord = parseInt(e.target.dataset.num)
            let shipPlaced = humanBoard.placeShip(direction, human.shipList[selectedShip], coord)
            if (shipPlaced != 'fail') {
                displayController.renderHumanBoard(humanBoard, humanSquares)
                selectedShip++
                placedNum++
                if (placedNum != human.shipList.length) human.shipList[selectedShip].selected = true
                displayController.updateShipBoxes(human)
                if (placedNum === human.shipList.length) {
                    humanSquares.forEach(square => {
                        square.removeEventListener('mouseover', hoverEffect)
                    })
            
                    humanSquares.forEach(square => {
                        square.removeEventListener('click', placeShip)
                    })
                    humanRound()
                }
                
            }
            
        }

        humanSquares.forEach(square => {
            square.addEventListener('mouseover', hoverEffect)
        })

        humanSquares.forEach(square => {
            square.addEventListener('click', placeShip)
        })

        document.addEventListener('keypress', (e) => {
            if (e.key === 'r' || e.key === 'R') direction *= -1
        })       
    }

    const humanRound = () => {

        const hoverEffect = (e) => {
            computerSquares.forEach(square => square.classList.remove('hovering'))
            e.target.classList.add('hovering')
        }

        const shoot = (e) => {
            const coord = parseInt(e.target.dataset.num)

            if (!computerBoard.missedAttacks.includes(coord) && 
            !computerBoard.hitAttacks.includes(coord)) {
                computerBoard.receiveAttack(parseInt(coord))
                computer.shipList.forEach(ship => {
                    ship.checkHit(parseInt(coord))
                })
                displayController.renderComputerBoard(computerBoard, computerSquares)
                displayController.updateShipBoxes(computer)
                checkForWinner()
                computerSquares.forEach(square => {
                    square.removeEventListener('mouseover', hoverEffect)
                })
        
                computerSquares.forEach(square => {
                    square.removeEventListener('click', shoot)
                })
                setTimeout(computerRound, 500)
            }
            
        }

        computerSquares.forEach(square => {
            square.addEventListener('mouseover', hoverEffect)
        })

        computerSquares.forEach(square => {
            square.addEventListener('click', shoot)
        })

    }

    const computerRound = () => {
        let shotFired = false;

        const shoot = () => {
            const coord = Math.floor(Math.random() * (99 - 0) + 0)

            if (!humanBoard.missedAttacks.includes(coord) && 
            !humanBoard.hitAttacks.includes(coord)) {
                humanBoard.receiveAttack(parseInt(coord))
                human.shipList.forEach(ship => {
                    ship.checkHit(parseInt(coord))
                })
                displayController.renderHumanBoard(humanBoard, humanSquares)
                displayController.updateShipBoxes(human)
                checkForWinner()
                shotFired = true;
                humanRound()
            }
        }

        while(!shotFired) {
            shoot()
        }
    }

    return {
        initializeGame,
        placementRound,
        humanRound,
        computerRound
    }
})();

function handleStart() {
    displayController.hideElement(startBtn)
    gameController.initializeGame()
}


displayController.createBoard(computerGrid, computerSquares)
displayController.createBoard(humanGrid, humanSquares)
startBtn.addEventListener('click', handleStart)