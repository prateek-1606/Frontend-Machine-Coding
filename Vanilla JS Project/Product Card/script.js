const containerElement = document.querySelector('.container')

function createStarRating(rating){
    const div = document.createElement('div');
    div.setAttribute('class','star-container');
    for(let i=0;i<5;i++){
        const span = document.createElement('span');
        if(i<rating){
            span.setAttribute('style','color:yellow;');
            span.innerHTML += `&starf;`
        } else{
            span.innerHTML += `&star;`
        }
        div.appendChild(span);
    }
    return div;
}

function createProduct (product) {
    const div = document.createElement('div');
    div.setAttribute('class','product-card');
    div.innerHTML += `
    <div class="image-container" >
        <img src=${product.image} />
    </div>
    <div class="card-content" >
        <p class="card-title" >${product.title}</p>
        <p>${product.category}</p>
    `
    div.appendChild(createStarRating(Math.floor(product.rating.rate)))
    div.innerHTML += `    <p class="rating-count" >Rating Count : ${product.rating.count}</p>
        <div class="button-container" >
            <button>Buy Now</button>
        </div>
    </div>
    `
    return div;
}

const fetchData = async () => {
    let data = await fetch('https://fakestoreapi.com/products')
    data = await data.json()
    for(let i=0;i<data.length;i++){
        containerElement.appendChild(createProduct(data[i]));
    }
}

fetchData()