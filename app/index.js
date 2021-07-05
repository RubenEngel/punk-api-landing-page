let page = 1;

function fetchData() {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
   .then((response) => response.json())
   .then((data) => data.forEach((beer) => {
        createBeerContainer(beer)
   }))
   
   page += 1;
}

function createBeerContainer(beer) {
    const beerGrid = document.querySelector('#beer__grid');
    // Create HTML elements
    const beerContainer = document.createElement('div');
    const beerTextContainer = document.createElement('div');
    const beerTitle = document.createElement('h2');
    const beerDesc = document.createElement('p');
    const beerImgContainer = document.createElement('div')
    const beerImg = document.createElement('img');
    const beerClearHeart = document.createElement('img')
    const beerFullHeart = document.createElement('img')

    //  Place elements within beer div
    beerTextContainer.appendChild(beerTitle).insertAdjacentHTML('beforeend', beer.name);
    beerTextContainer.appendChild(beerDesc).insertAdjacentHTML('beforeend', beer.description);
    beerImgContainer.appendChild(beerImg).src = beer.image_url;
    beerImgContainer.appendChild(beerClearHeart).src = 'assets/heart-thin-32.png'
    beerImgContainer.appendChild(beerFullHeart).src = 'assets/heart-thin-white-32.png'
    beerContainer.appendChild(beerTextContainer);
    beerContainer.appendChild(beerImgContainer);
    
    // Add classes to each element
    beerContainer.classList.add('beer__container') 
    beerTextContainer.classList.add('beer__textContainer');
    beerTitle.classList.add('beer__title');
    beerDesc.classList.add('beer__description');
    beerImgContainer.classList.add('beer__imageContainer');
    beerImg.classList.add('beer__image');
    beerClearHeart.classList.add('beer__heart')
    beerFullHeart.classList.add('beer__heart', 'hidden')
    // Add beer div to beer grid
    beerGrid.appendChild(beerContainer)

    beerImgContainer.addEventListener('click', () => beerFullHeart.classList.toggle('hidden'))
}

function toggleMenu() {
    document.querySelector('.navbar__menu').classList.toggle('hidden')
}

function toggleHidden(element) {
    element.classList.toggle('hidden')
}

// Add click event listeners on buttons
document.querySelector('.beer__button').addEventListener('click', fetchData);
document.querySelector('.navbar__menuIcon').addEventListener('click', toggleMenu)

fetchData();
