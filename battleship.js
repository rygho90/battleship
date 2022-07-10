const shipFactory = (shipLength) => {
    const beenHit = [];

    let sunk = false;

    const hit = pos => beenHit.push(pos)

    const isSunk = (beenHit) => {
        sunk = (beenHit.length === shipLength) ? true : false;
    } 

    return {shipLength, beenHit, sunk, hit, isSunk}
}