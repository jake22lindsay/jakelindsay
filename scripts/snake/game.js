import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"


// Settings
const SNAKE_CAN_INTERSECT_SELF = true;
export const SNAKE_CAN_HIT_WALLS = false;


let smartSnake = false;
export function getSmartSnake() {
    return smartSnake
}
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("snake-space");

function main(currentTime) {

    if (gameOver) {
        if (confirm("You lost. Press ok to restart.")) {
            window.location ="/"
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    // console.log("Render")
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawFood(gameBoard)
    drawSnake(gameBoard)
}

function checkDeath() {

    if (SNAKE_CAN_INTERSECT_SELF && SNAKE_CAN_HIT_WALLS) {
        gameOver = gameOver
    } else if (SNAKE_CAN_HIT_WALLS) {
        gameOver = snakeIntersection()
    } else if (SNAKE_CAN_INTERSECT_SELF) {
        gameOver = outsideGrid(getSnakeHead())
    } else {
        gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
    }
}
