import { gCols as gridCols, gRows as gridRows } from "../genGrid.js"

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * gridCols) + 1,
        y: Math.floor(Math.random() * gridRows) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridCols ||
        position.y < 1 || position.y > gridRows
    )
}
