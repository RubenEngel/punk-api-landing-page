// ------ Fetch API data logic
let page = 1;

function fetchData() {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
   .then((response) => response.json())
   .then((data) => data.forEach((beer) => {
        createBeerContainer(beer)
   }))
   .catch((error) => {
       console.log(error);
        document.querySelector('.beer__error').classList.remove('hidden')
    })
   
   page += 1;
}

// ------ Create new beer component function
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

    //  Place elements within beer container
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
    // Add event listener for hearting beers
    beerImgContainer.addEventListener('click', () => beerFullHeart.classList.toggle('hidden'))

    // Add beer container to beer grid
    beerGrid.appendChild(beerContainer)
    setTimeout(() => beerContainer.classList.add('animate'), 500);
    
}

// Handle toggling mobile dropdown menu visibility
document.querySelector('.navbar__menuIcon').addEventListener('click', () => {
    document.querySelector('.navbar__dropMenu').classList.toggle('hidden')
});

// Add click event listeners on 'load more' button
document.querySelector('.beer__button').addEventListener('click', fetchData);

// Load the first 10 products on page load
fetchData();
