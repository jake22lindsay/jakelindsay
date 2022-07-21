let ELEM_ID = "main-text-tw";
let PHRASES = ["develop the web for inclusion.", 
                "build predictive models in R.",
                "design REST APIs with Express.", 
                "create blazing fast React web apps.", 
                "write bugged out code such as this."];
let ADD_SPEED = 60;
let REM_SPEED = 50;
let DELAY_TIME = 2000;


// functionality
const typeWriterAdd = (elemId, phrase, speed) => {
    elem = document.getElementById(elemId);
    let i = 0;
    let intervalId = setInterval(function() {
        elem.innerHTML += phrase[i];
        i++;
        if (i === phrase.length) {
            clearInterval(intervalId);
        }
    }, speed)
};


const typeWriterRem = (elemId, speed) => {
    elem = document.getElementById(elemId);
    let i = elem.innerHTML.length - 1;
    let intervalId = setInterval(function() {
        let str = elem.innerHTML;
        let newStr = str.slice(0, -1);
        elem.innerHTML = newStr;
        i--;
        if (i < 0) {
            clearInterval(intervalId);
        }
    }, speed)
};


const typeWriterCycle = (elemId, phrases, addSpeed, remSpeed, delayTime) => {

    typeWriterAdd(elemId, phrases[0], addSpeed);
    setTimeout(function() {
        typeWriterRem(elemId, remSpeed);
    }, (addSpeed * phrases[0].length) + delayTime)  

    let i = 1
    let cycleIntervalId = setInterval(() => {
        typeWriterAdd(elemId, phrases[i], addSpeed);
        setTimeout(function() {
            typeWriterRem(elemId, remSpeed);
        }, (addSpeed * phrases[i].length) + delayTime)    
        i++;
        if (i === phrases.length) {
            i = 0;
        }
    }, 5000);
}



typeWriterCycle(ELEM_ID, PHRASES, ADD_SPEED, REM_SPEED, DELAY_TIME)
    
    
