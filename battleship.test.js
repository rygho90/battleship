import {shipFactory} from './battleship'

test('create a ship object', () => {
    const newShip = shipFactory(['A1', 'A2'])
    expect(newShip).toHaveProperty('shipLength', 2)
    expect(newShip).toHaveProperty('beenHit', [])
    expect(newShip).toHaveProperty('sunk', false)
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