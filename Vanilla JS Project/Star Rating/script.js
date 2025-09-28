const starContainer = document.getElementById('star-container');
const stars = document.querySelectorAll('.star');
const ratingCount = document.getElementById('rating-count')
let currfilled = -1;

starContainer.addEventListener('mouseover',(e) => {
    const currIndex = e.target.dataset.index;
    for(let i=0;i<5;i++){
        stars[i].classList.remove('filled-star');
    }

    for(let i=0;i<=currIndex;i++){
        stars[i].classList.add('filled-star');
    }
})

starContainer.addEventListener('mouseleave',(e) => {
    for(let i=0;i<5;i++){
        stars[i].classList.remove('filled-star');
    }

    for (let i = 0; i <= currfilled; i++) {
        stars[i].classList.add("filled-star");
    }
    
})

starContainer.addEventListener('click',(e) => {
    const currIndex = e.target.dataset.index;
    for(let i=0;i<5;i++){
        stars[i].classList.remove('filled-star');
    }

    for(let i=0;i<=currIndex;i++){
        stars[i].classList.add('filled-star');
    }

    ratingCount.textContent = parseInt(e.target.dataset.index) + 1;

    currfilled = currIndex
})