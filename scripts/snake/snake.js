import { getInputDirection } from "./input.js";
import { outsideGrid } from "./grid.js";
import { SNAKE_CAN_HIT_WALLS } from "./game.js";

export const SNAKE_SPEED = 30;
const snakeBody = [
    { x: 9, y: 13},
    { x: 9, y: 14},
    { x: 9, y: 15},
    { x: 9, y: 16}
]
let newSegments = 12

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    
    if (SNAKE_CAN_HIT_WALLS && outsideGrid(getSnakeHead())) {
        snakeBody[0].x = 10
        snakeBody[0].y = 10
    }
    if  (!(inputDirection.x === 0 && inputDirection.y === 0 )) {
        for (let i = snakeBody.length - 2; i >= 0; i--) {
            snakeBody[i + 1] = { ...snakeBody[i] }
    }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
}

export function expandSnake(amount) {
    newSegments += amount

}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}


function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0

}



