const ELEMENT = document.getElementById("main-text");
const TEXT = ELEMENT.innerHTML;
const SPEED = 20;
const DELAY = 1000;
ELEMENT.innerText = ""

const ELEMENT2 = document.getElementById("small-text");
const TEXT2 = ELEMENT2.innerHTML;
const SPEED2 = 1;
const DELAY2 = 1000 + (TEXT.length * SPEED) + DELAY; // adds time of first element
ELEMENT2.innerText = ""

const write = (elem, text, speed, delay) => {
    setTimeout(function() {
        i = 0;
        let intervalId = setInterval(() => {
            elem.innerHTML += text[i];
            i++
            if (i === text.length) {
                clearInterval(intervalId)
            }
        }, speed);
    }, delay)

}

write(ELEMENT, TEXT, SPEED, DELAY)
write(ELEMENT2, TEXT2, SPEED2, DELAY2)
