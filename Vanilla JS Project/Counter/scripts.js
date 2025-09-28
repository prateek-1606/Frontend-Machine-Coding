const counterElement = document.getElementById('counter')
const incrementButton = document.querySelector('.increment-button')
const decrementButton = document.querySelector('.decrement-button')
const counterInput = document.getElementById('counter-input')
const resetButton = document.querySelector('.reset-button')

incrementButton.addEventListener('click',(e) => {
    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(counterInput.value)
})

decrementButton.addEventListener('click',(e) => {
    counterElement.innerText = Math.max(parseInt(counterElement.innerText) - parseInt(counterInput.value),0);
})

resetButton.addEventListener('click',() => {
    counterElement.innerText = 0;
})
