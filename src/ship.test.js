import ship from './ship'

test('create a ship object', () => {
    const newShip = ship(['A1', 'A2'])
    expect(newShip).toHaveProperty('hit')
    expect(newShip).toHaveProperty('isSunk')
})

test("test the ship's hit method", () => {
    const newShip = ship(['A1', 'A2'])
    newShip.hit('A1')
    expect(newShip.beenHit).toEqual(['A1'])
    expect(newShip.beenHit.length).toBe(1)
})

test("test the ship's isSunk method", () => {
    const newShip = ship(['A1', 'A2'])
    newShip.hit('A1')
    newShip.hit('A2')
    expect(newShip.isSunk()).toBe(true)
})