import ship from './ship'
import gameboard from './gameboard'
import player from './player'
import './styles.css'

const computerArea = document.querySelector('[data-computer-area]')
const humanArea = document.querySelector('[data-human-area]')

const computerBoard = gameboard();
const humanBoard = gameboard();


