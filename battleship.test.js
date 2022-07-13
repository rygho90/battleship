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

    // Ship too long for row, returns null
    const shipThree = gameBoard.placeShip('horizontal', 5, 8)
    expect(shipThree).toBe(null)
})
