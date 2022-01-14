import { getFoodLocation } from "./food.js";
import { getSnakeHead } from "./snake.js";
import { gCols as gridCols, gRows as gridRows } from "../genGrid.js"


let smartSnake = true;

let inputDirection = { x: 0, y: -1 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case "ArrowUp":
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case "ArrowDown":
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case "ArrowLeft":
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case "ArrowRight":
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
        case "s":
            inputDirection = { x: 0, y: 0 }
    }
})


export function getInputDirection() {
    if (smartSnake) {
        smartDirection()
    }
    lastInputDirection = inputDirection
    return inputDirection
}

function giveDir () {
    return inputDirection
}

function turnSnake(direction) {
    switch (direction) {
        case "up":
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case "down":
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case "left":
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case "right":
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
}

function smartDirection() {
    let food = getFoodLocation()
    let snake = getSnakeHead()
    let dir = giveDir()

    if (dir.x === 0 && dir.y === -1) {
        if (snake.y === food.y) {
            if (snake.x > food.x) turnSnake("left")
            if (snake.x < food.x) turnSnake("right")
        } else if (snake.y < food.y) {
            if (snake.x > food.x) turnSnake("left")
            if (snake.x < food.x) turnSnake("right")
            if (snake.x === food.x) {
                if (snake.x > gridCols / 2) turnSnake("left")
                if (snake.x <= gridCols / 2) turnSnake("right")
            }
        }
    } else if (dir.x === 0 && dir.y === 1) {
        if (snake.y === food.y) {
            if (snake.x > food.x) turnSnake("left")
            if (snake.x < food.x) turnSnake("right")
        } else if (snake.y > food.y) {
            if (snake.x > food.x) turnSnake("left")
            if (snake.x < food.x) turnSnake("right")
            if (snake.x === food.x) {
                if (snake.x > gridCols / 2) turnSnake("left")
                if (snake.x <= gridCols / 2) turnSnake("right")
            }
        }
    } else if (dir.x === -1 && dir.y === 0) {
        if (snake.x === food.x) {
            if (snake.y > food.y) turnSnake("up")
            if (snake.y < food.y) turnSnake("down")
        } else if (snake.x < food.x) {
            if (snake.y > food.y) turnSnake("up")
            if (snake.y < food.y) turnSnake("down")
            if (snake.y === food.y) {
                if (snake.y > gridRows / 2) turnSnake("up")
                if (snake.y <= gridRows / 2) turnSnake("down")
            }
        }
    } else if (dir.x === 1 && dir.y === 0) {
        if (snake.x === food.x) {
            if (snake.y > food.y) turnSnake("up")
            if (snake.y < food.y) turnSnake("down")
        } else if (snake.x > food.x) {
            if (snake.y > food.y) turnSnake("up")
            if (snake.y < food.y) turnSnake("down")
            if (snake.y === food.y) {
                if (snake.y > gridRows / 2) turnSnake("up")
                if (snake.y <= gridRows / 2) turnSnake("down")
            }
        }        
    }
}
