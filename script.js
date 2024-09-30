const leftmove = document.querySelector('.leftmove');
const rightmove = document.querySelector('.rightmove');
const sneakerkinds = document.querySelector('.sneakerkinds');
const featured = document.querySelectorAll('.featured');
const features = document.querySelector('.features');
const menuoptions = document.querySelector('.menuoptions');
const newdiv = document.querySelector('.newdiv');
const womendiv = document.querySelector('.womendiv');
const kidsdiv = document.querySelector('.kidsdiv');
const jordendiv = document.querySelector('.jordendiv');
const salediv = document.querySelector('.salediv');
const mendiv = document.querySelector('.mendiv');
const nikelogo = document.querySelector('.nikelogo');

const newdivs = [
    [
        'New',
        'New Arrivals',
        'Best Sellers',
        'New & Upcoming Drops',
        'SNKRS Launch Calendar'
    ],
    [
        'Trending',
        'ACG Essentials',
        'Retro Running',
        'New Fall Color: Flax',
        'Shop Sport'
    ],
    [
        'Shop Classics',
        'Dunk',
        'Air Jordan 1',
        'Air Force',
        'Air Max',
        'Blazer',
        'Vomero'
    ],
    [
        'Explore',
        'Running Shoe Finder',
        'Bra Finder',
        'Product Care',
        'Member Rewards',
        'Buying Guides'
    ]
];

const mens = [
    [
        'New',
        'New Arrivals',
        'Best Sellers',
        'New & Upcoming Drops'
    ],
    [
        'Collections',
        'Fitness Favs',
        'NFL Fan Gear'
    ],
    [
        'Shoes',
        'All Shoes',
        'Lifestyle',
        'Jordan',
        'Dunk',
        'Retro Running',
        'Air Max',
        'Air Force 1',
        'Training & Gym',
        'Basketball',
        'Running',
        'Nike SB',
        'Sandals & Slides',
        'Nike by You',
        'Shoes $100 & Under'
    ],
    [
        'Clothing',
        'All Clothing',
        'Hoodies & Sweatshirts',
        'Shorts',
        'Pants',
        'Outerwear',
        'Tops & T-Shirts',
        'Matching Sets',
        'Big & Tall',
        'Underwear & More',
        'Jordan'
    ],
    [
        'Accessories',
        'Bags & Backpacks',
        'Hats & Headwear',
        'Socks'
    ],
    [
        'Shop by Sport',
        'Basketball',
        'Running',
        'Golf',
        'Soccer',
        'Training & Gym',
        'Tennis',
        'Baseball',
        'Football',
        'Trail Running',
        'Swimming',
        'Pickleball',
        'Fan Gear'
    ]
];

const womens = [
    [
        'New',
        'New Arrivals',
        'Best Sellers',
        'New & Upcoming Drops'
    ],
    [
        'Collections',
        'Zenvy',
        'New Fall Color: Flax',
        'Fleece Shop'
    ],
    [
        'Shoes',
        'All Shoes',
        'Lifestyle',
        'Jordan',
        'Dunk',
        'Retro Running',
        'Air Max',
        'Air Force 1',
        'Training & Gym',
        'Basketball',
        'Running',
        'Nike SB',
        'Sandals & Slides',
        'Nike by You',
        'Shoes $100 & Under'
    ],
    [
        'Clothing',
        'All Clothing',
        'Hoodies & Sweatshirts',
        'Shorts',
        'Pants',
        'Leggings',
        'Outerwear',
        'Tops & T-Shirts',
        'Skirts & Dresses',
        'Bras',
        'Matching Sets',
        'Plus Size',
        'Jordan'
    ],
    [
        'Accessories',
        'Bags & Backpacks',
        'Hats & Headwear',
        'Socks'
    ],
    [
        'Shop by Sport',
        'Basketball',
        'Running',
        'Golf',
        'Soccer',
        'Fitness',
        'Volleyball',
        'Tennis',
        'Yoga',
        'Trail Running',
        'Softball',
        'Swimming',
        'Pickleball',
        'Fan Gear'
    ]
];

const kids = [
    [
        'New',
        'New Arrivals',
        'Best Sellers',
        'New & Upcoming Drops'
    ],
    [
        'Collections',
        'Teen Essentials',
        'EasyOn',
        'Fall Fleece'
    ],
    [
        'Shoes by Age',
        'Big Kids (1Y - 7Y)',
        'Little Kids (8C - 3Y)',
        'Baby & Toddler (1C - 10C)'
    ],
    [
        'All Shoes',
        'Lifestyle',
        'Jordan',
        'Dunk',
        'Retro Running',
        'Air Max',
        'Air Force 1',
        'Basketball',
        'Running',
        'Nike SB',
        'Sandals & Slides'
    ],
    [
        'Clothing By Age',
        'Big Kids (XS - XL)',
        'Little Kids (4 - 7)',
        'Baby & Toddler (0M - 4T)',
        'Extended Sizing'
    ],
    [
        'All Clothing',
        'Hoodies & Sweatshirts',
        'Shorts',
        'Pants & Tights',
        'Outerwear',
        'Tops & T-Shirts',
        'Skirts & Dresses',
        'Bras',
        'Matching Sets',
        'Jordan'
    ],
    [
        'Accessories',
        'Bags & Backpacks',
        'Hats & Headwear',
        'Socks'
    ],
    [
        'Shop by Sport',
        'Basketball',
        'Running',
        'Golf',
        'Soccer',
        'Baseball',
        'Football',
        'Softball',
        'Tennis',
        'Dance',
        'Gymnastics',
        'Swimming',
        'Fan Gear'
    ]
];

const jordens = [
    [
        'New',
        'New Arrivals',
        'Best Sellers',
        'New in Fleece',
        'All Sale'
    ],
    [
        'Collections',
        'Jordan Heat Check',
        'Trending Colors',
        'Golf Essentials',
        'Jordan Sleeper Picks'
    ],
    [
        'Men',
        'Shop All',
        'Shoes',
        'AJ1',
        'Clothing',
        'Basketball'
    ],
    [
        'Women',
        'Shop All',
        'Shoes',
        'AJ1',
        'Clothing',
        'Basketball'
    ],
    [
        'Kids',
        'Shop All',
        'Shoes',
        'AJ1',
        'Clothing',
        'Basketball',
        'Big Kids',
        'Little Kids',
        'Baby & Toddler'
    ],
    [
        'Accessories',
        'Shop All',
        'Bags & Backpacks',
        'Hats & Headwear'
    ]
];

const sales = [
    [
        'All Sale',
        'Sale Shoes',
        'Sale Clothing',
        'Sale Accessories'
    ],
    [
        'Men',
        'Shoes',
        'Clothing',
        'Accessories',
        'Shop All'
    ],
    [
        'Women',
        'Shoes',
        'Clothing',
        'Accessories',
        'Shop All'
    ],
    [
        'Kids',
        'Shoes',
        'Clothing',
        'Accessories',
        'Shop All'
    ]
];


const insidetext = (e) => {
    let content = ' ';
    for (let i = 0; i < e.length; i++) {
        const element = e[i];
        /*if (element === 1) {
            content +=  `<h3>${element.join(',')}</h3>`
        } else {
            content +=  `<p>${element.join(',')}</p>`
        }*/
        content +=  `
        <div class='contentoptions'>
        <h6>${element[0]}</h6>
        <p>${element.slice(1).join('</p><p>','</p>')}
        </div>`;
    }
    return content;
}

const newdivhover = (e) => {
    e.addEventListener('mouseover',() => {
        let hovervalue ='';
        if (e===newdiv) {
            hovervalue = newdivs;
        } else if (e===mendiv) {
            hovervalue = mens;
        } else if (e===womendiv) {
            hovervalue = womens;
        } else if (e===kidsdiv) {
            hovervalue = kids;
        } else if (e===jordendiv) {
            hovervalue = jordens;
        } else if (e===salediv) {
            hovervalue = sales;
        } 
        menuoptions.innerHTML =insidetext(hovervalue);
        menuoptions.style.display = 'flex';
    });
    menuoptions.addEventListener('mouseenter', () => {
        menuoptions.style.display = 'flex'; // Keep the menu open
    });
    menuoptions.addEventListener('mouseleave', () => {
        menuoptions.style.display = 'none';
        menuoptions.innerHTML =``;
    });
    const contentoptions = document.querySelectorAll('.contentoptions');
        contentoptions.forEach(menuopen);
        function menuopen() {
            contentoptions.addEventListener('mouseover',() => {
                menuoptions.style.display = 'flex';
            });
    };
};


leftmove.addEventListener('click',() => {
    sneakerkinds.scrollBy({
        left:-300,
        behavior:'smooth'
    });
});

rightmove.addEventListener('click',() => {
    sneakerkinds.scrollBy({
        left: 300, // Adjust this value as needed for scroll distance
        behavior: 'smooth'
      });
});

const cloneSneakers = () => {
    const sneakers = document.querySelectorAll('.sneaker');
    sneakers.forEach((sneaker) => {
        let clone = sneaker.cloneNode(true);
        sneakerkinds.appendChild(clone); // Clone appended for infinite scroll
    });
};

const openfacts =() => {
    features.addEventListener('mouseover',() => {
        features.style.height = '560px'
    });
    features.addEventListener('mouseout',() => {
        features.style.height = '200px'
    });
};

nikelogo.addEventListener('click',() => {
    location.reload()
})

featured.forEach(openfacts);

cloneSneakers();
newdivhover(mendiv);
newdivhover(womendiv);
newdivhover(newdiv);
newdivhover(kidsdiv);
newdivhover(jordendiv);
newdivhover(salediv);

