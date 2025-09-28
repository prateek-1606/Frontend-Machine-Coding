const modalButton = document.getElementById('btn')
const closeButton = document.getElementById('close')
const modal = document.getElementById('modal');

modalButton.addEventListener('click',(e) => {
    modal.style.display = 'block'
})

closeButton.addEventListener('click',(e) => {
    modal.style.display = 'none'
})
