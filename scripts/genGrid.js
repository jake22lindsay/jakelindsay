
export const GRID_SCALE = 10 // larger it is, the less grid rows and columns there are
const PROPORTION_OF_PARENT = 0.99


const generateGrid = () => {

    let gridRows = Math.floor(window.innerHeight / GRID_SCALE)
    let gridCols = Math.floor(window.innerWidth / GRID_SCALE)
    let gridSpaceSize = (window.innerHeight / gridRows) * PROPORTION_OF_PARENT
 
    $("#snake-space").css({
        "grid-template-rows": `repeat(${gridRows}, ${gridSpaceSize}px)`,
        "grid-template-columns": `repeat(${gridCols}, ${gridSpaceSize}px)`,
    })
    
} 

generateGrid()
window.addEventListener("resize", generateGrid)

export let gRows = Math.floor(window.innerHeight / GRID_SCALE)
export let gCols = Math.floor(window.innerWidth / GRID_SCALE)

