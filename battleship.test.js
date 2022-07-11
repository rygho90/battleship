import {shipFactory} from './battleship'

test('create a ship object', () => {
    const newShip = shipFactory(['A1', 'A2'])
    expect(newShip).toHaveProperty('shipLength', 2)
    expect(newShip).toHaveProperty('beenHit', [])
    expect(newShip).toHaveProperty('sunk', false)
    expect(newShip).toHaveProperty('hit')
    expect(newShip).toHaveProperty('isSunk')
})