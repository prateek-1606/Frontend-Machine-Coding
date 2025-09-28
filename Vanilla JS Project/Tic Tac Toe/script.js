const containerElement = document.querySelector('.inner-container');
const resultElement = document.querySelector('.result')
const resetButton = document.querySelector('.reset')
let mat = [[0,0,0],[0,0,0],[0,0,0]];

let player = 1;
let isWinner = false;

function checkWinner(){
    for(let i=0;i<mat.length;i++){
        let cnt = 0;
        for(let j=0;j<mat[i].length;j++){
            if(mat[i][j] && mat[i][0]===mat[i][j]) cnt++;
        }
        if(cnt===3) return mat[i][0];
    }
    for(let i=0;i<mat[0].length;i++){
        let cnt = 0;
        for(let j=0;j<mat.length;j++){
            if(mat[j][i] && mat[0][i] === mat[j][i]) cnt++;
        }
        if(cnt==3) return mat[0][i];
    }
    let i=0,j=0;
    let cnt = 0;
    while(i<mat.length && j<mat[0].length){
        if(mat[i][j] && mat[i][j]===mat[0][0]){
            cnt++;
        }
        i++;
        j++;
        if(cnt==3) return mat[0][0];
    }
    i = 0,j = mat[0].length-1,cnt = 0;
    while(i<mat.length && j>=0){
        if(mat[i][j] && mat[i][j]===mat[0][mat[0].length-1]){
            cnt++;
        }
        i++;
        j--;
        if(cnt==3) return mat[0][0];
    }
    return -1;
}

containerElement.addEventListener('click',(e) => {
    if(isWinner) return;
    let row = parseInt(e.target.dataset.row),col = parseInt(e.target.dataset.col);

    let span = document.createElement('span')
    if(player===1){
        span.setAttribute('class','cross');
        span.innerHTML += '&#10006;'
        mat[row][col] = 1;
        player = 2;
    } else {
        span.setAttribute('class','circle');
        span.innerHTML +=  '&#9675;'
        mat[row][col] = 2;
        player = 1;
    }
    e.target.appendChild(span)
    if(checkWinner()===1){
        isWinner = true;
        resultElement.style.display = "block";
        resultElement.innerText = "Winner - Player X";
    } else if(checkWinner()===2) {
        isWinner = true;
        resultElement.style.display = "block";
        resultElement.innerText = "Winner - Player O";
    }
})

resetButton.addEventListener('click',(e) => {
    containerElement.innerHTML = `
    <div class="row" >
        <div class="box" data-row="0" data-col="0" ></div>
        <div class="box" data-row="0" data-col="1" ></div>
        <div class="box" data-row="0" data-col="2" ></div>
    </div>
    <div class="row">
        <div class="box" data-row="1" data-col="0" ></div>
        <div class="box" data-row="1" data-col="1" ></div>
        <div class="box" data-row="1" data-col="2" ></div>
    </div>
    <div class="row">
        <div class="box" data-row="2" data-col="0" ></div>
        <div class="box" data-row="2" data-col="1" ></div>
        <div class="box" data-row="2" data-col="2" ></div>
    </div>
    `;
    player = 1;
    isWinner = false;
    mat = [[0,0,0],[0,0,0],[0,0,0]];
    resultElement.style.display = "none";
})