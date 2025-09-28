const chessContainer = document.querySelector('.chess-board');

for(let i=0;i<8;i++){
    let rowElement = document.createElement('div');
    rowElement.setAttribute('class','row');
    for(let j=0;j<8;j++){
        let blockElement = document.createElement('div');
        blockElement.setAttribute('id',`${i}-${j}`);
        if(i%2 == j%2){
            blockElement.setAttribute('class','block black-box');   
        } else{
            blockElement.setAttribute('class','block white-box');
        }
        rowElement.appendChild(blockElement)
    }
    chessContainer.append(rowElement)
}

function removeClass(){
    const blockElements = document.querySelectorAll('.block')
    for(let i=0;i<blockElements.length;i++){
        blockElements[i].classList.remove('hover-block')
        blockElements[i].classList.remove('highlight-block')
    }
}

function highlightDiagonalElement(row,col){
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(i!=row && j!=col && ((i-row) === (j-col) || (i+j) === (row+col))){
                const blockElement = document.getElementById(`${i}-${j}`);
                blockElement.classList.add('highlight-block')
            }
        }
    }
}

chessContainer.addEventListener('mouseover',(e) => {
    removeClass()
    e.target.classList.add('hover-block')
    const row = parseInt(e.target.id.split('-')[0]);
    const col = parseInt(e.target.id.split('-')[1]);
    highlightDiagonalElement(row,col);
})

chessContainer.addEventListener('mouseleave',(e) => {
    removeClass()
})