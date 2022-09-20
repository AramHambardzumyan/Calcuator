const display = document.getElementById('display')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const items = Array.from(document.getElementsByClassName('item'))
const last = document.getElementById('last')
let count = 0

items.map(el => {
    el.addEventListener('click', (event) => {
        if (display.innerText[display.innerText.length - 1] === '*' || display.innerText[display.innerText.length - 1] === '-' ||
            display.innerText[display.innerText.length - 1] === '+' || display.innerText[display.innerText.length - 1] === '/') {
            if (!isNaN(event.target.innerText)) {
                display.innerText = display.innerText + event.target.innerText
            }
        } else {
            if (count === 0) {
                display.innerText = display.innerText + event.target.innerText;
            } else {
                display.innerText = event.target.innerText;
                count = 0
            }
        }
    })
})

equal.addEventListener('click', () => {
    display.innerText = eval(display.innerText)
    count = count + 1
})
clear.addEventListener('click', () => {
    display.innerText = ''
})
last.addEventListener('click', () => {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1)
})
