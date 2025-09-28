const innerContainer = document.querySelector('.inner-container')
let cryptoData = []

function createCard(crypto){
    const div = document.createElement('div');
    div.setAttribute('class','card');
    div.innerHTML += `
    <div class="card-image-container">
        <img class="card-image" src=${crypto.image} />
    </div>
    <div class="card-description" >
        <div class="card-title" >${crypto.name}</div>
        <div>${crypto.symbol}</div>
    </div>
    <div class="card-stats" >
        <div class="card-stats-title" >${crypto.current_price}</div>
        <div class="red-text" >${crypto.ath_change_percentage}</div>
    </div>
    `
    return div;
}

const fetchData = async () => {
    try{
        cryptoData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        cryptoData = await cryptoData.json()
        for(let i=0;i<cryptoData.length;i++){
            innerContainer.appendChild(createCard(cryptoData[i]));
        }
    }
    catch(e){
        console.log(e);
    }
}

fetchData()