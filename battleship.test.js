import {shipFactory, gameboardFactory} from './battleship'

test('create a ship object', () => {
    const newShip = shipFactory(['A1', 'A2'])
    expect(newShip).toHaveProperty('hit')
    expect(newShip).toHaveProperty('isSunk')
})

test("test the ship's hit method", () => {
    const newShip = shipFactory(['A1', 'A2'])
    newShip.hit('A1')
    expect(newShip.beenHit).toEqual(['A1'])
    expect(newShip.beenHit.length).toBe(1)
})

test("test the ship's isSunk method", () => {
    const newShip = shipFactory(['A1', 'A2'])
    newShip.hit('A1')
    newShip.hit('A2')
    expect(newShip.isSunk()).toBe(true)
})

test("test placing a ship horizontally", () => {
    const gameBoard = gameboardFactory()
    const shipOne = gameBoard.placeShip('horizontal', 3, 2)
    expect(shipOne).toHaveProperty('shipLength', 3)
    expect(shipOne).toHaveProperty('shipLocation', ['A3', 'A4', 'A5'])

    const shipTwo = gameBoard.placeShip('horizontal', 4, 5)
    expect(shipTwo).toHaveProperty('shipLength', 4)
    expect(shipTwo).toHaveProperty('shipLocation', ['A6', 'A7', 'A8', 'A9'])

    // Ship too long for row
    const shipThree = gameBoard.placeShip('horizontal', 5, 8)
    expect(shipThree).toBe(undefined)
})

test("test placing a ship vertically", () => {
    const gameBoard = gameboardFactory()
    const shipOne = gameBoard.placeShip('vertical', 3, 2)
    expect(shipOne).toHaveProperty('shipLength', 3)
    expect(shipOne).toHaveProperty('shipLocation', ['A3', 'B3', 'C3'])

    const shipTwo = gameBoard.placeShip('vertical', 4, 38)
    expect(shipTwo).toHaveProperty('shipLength', 4)
    expect(shipTwo).toHaveProperty('shipLocation', ['D9', 'E9', 'F9', 'G9'])

    // Ship too long for column
    const shipThree = gameBoard.placeShip('vertical', 5, 86)
    expect(shipThree).toBe(undefined)
})

test("cannot place a ship on top of another ship", () => {
    const gameBoard = gameboardFactory()

    const shipOne = gameBoard.placeShip('horizontal', 3, 2)
    const shipTwo = gameBoard.placeShip('horizontal', 3, 2)
    expect(shipOne).toHaveProperty('shipLength', 3)
    expect(shipOne).toHaveProperty('shipLocation', ['A3', 'A4', 'A5'])
    expect(shipTwo).toBe(undefined)

    const shipThree = gameBoard.placeShip('vertical', 3, 2)
    expect(shipThree).toBe(undefined)
})

test("receive an attack", () => {
    const gameBoard = gameboardFactory()
    const shipOne = gameBoard.placeShip('horizontal', 3, 2)
    gameBoard.receiveAttack('A4')
    expect(shipOne).toHaveProperty('beenHit', ['A4'])
})

test("sink a ship", () => {
    const gameBoard = gameboardFactory()
    const shipOne = gameBoard.placeShip('horizontal', 3, 2)
    gameBoard.receiveAttack('A4')
    gameBoard.receiveAttack('A3')
    gameBoard.receiveAttack('A5')
    expect(shipOne.isSunk()).toBe(true)
})

test("miss an attack", () => {
    const gameBoard = gameboardFactory()
    const shipOne = gameBoard.placeShip('horizontal', 3, 2)
    gameBoard.receiveAttack('J4')
    expect(shipOne).toHaveProperty('beenHit', [])
    expect(gameBoard).toHaveProperty('missedAttacks', ['J4'])
})

test("sink all ships", () => {
    const gameBoard = gameboardFactory()
    const shipOne = gameBoard.placeShip('horizontal', 3, 2)
    gameBoard.receiveAttack('A4')
    gameBoard.receiveAttack('A3')
    gameBoard.receiveAttack('A5')

    expect(gameBoard.allSunk()).toBe(true)
})