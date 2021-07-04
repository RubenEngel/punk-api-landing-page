let page = 1;

function fetchData() {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
   .then((response) => response.json())
   .then((data) => data.forEach((beer) => {
        createbeerContainer(beer)
   }))
   
   page += 1;
}

function createbeerContainer(beer) {
    const beerGrid = document.getElementById('beers');
    // Create HTML elements
    const beerContainer = document.createElement('div');
    const beerTextContainer = document.createElement('div');
    const beerTitle = document.createElement('h2');
    const beerDesc = document.createElement('p');
    const beerImgContainer = document.createElement('div')
    const beerImg = document.createElement('img');

    //  Place elements within beer div
    beerTextContainer.appendChild(beerTitle).insertAdjacentHTML('beforeend', beer.name);
    beerTextContainer.appendChild(beerDesc).insertAdjacentHTML('beforeend', beer.description);
    beerImgContainer.appendChild(beerImg).src = beer.image_url;
    beerContainer.appendChild(beerTextContainer);
    beerContainer.appendChild(beerImgContainer);
    
    // Add classes to each element
    beerContainer.classList.add('beer__container') 
    beerTextContainer.classList.add('beer__textContainer');
    beerTitle.classList.add('beer__title');
    beerDesc.classList.add('beer__description');
    beerImgContainer.classList.add('beer__imageContainer');
    beerImg.classList.add('beer__image');
    // Add beers div to beer grid
    beerGrid.appendChild(beerContainer)
}

document.querySelector('#beer__button').addEventListener('click', fetchData);

fetchData();