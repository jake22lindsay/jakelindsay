import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = {x: 5, y: 20 } // change to initializeFood() once function is implemented
const EXPANSION_RATE = 1


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
    
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition 
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

export function getFoodLocation() {
    let x = food.x;
    let y = food.y;
    return { x: x, y: y }
}

function initializeFood() {
    // set starting food location based on grid size
    return 
}
