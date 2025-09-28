const cContainerElement = document.querySelector('.c-container');

const queue = [];

cContainerElement.addEventListener('click', (e) => {
    if(e.target.classList[0]==='box' && !queue.includes(e.target)){
        e.target.classList.add('green');
        queue.push(e.target);
    }

    if(queue.length === 7){
        let cnt = 0;
        while(queue.length > 0){
            let elem = queue.pop();
            cnt++;
            setTimeout(() => {
                elem.classList.remove('green');
            },cnt*800)
        }
    }
})