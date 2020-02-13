<<<<<<< HEAD
=======
const tours = [ 

    {date: 'Sun, Feb, 23rd', venue:'For Solo', location: 'Mexico Mexico'},
    {date: 'Sun, Feb, 24th', venue:'For Solo', location:  'Mexico Mexico'},
    {date: 'Thu, Feb, 27th', venue:'Festival Del Mar', location: 'Vina Del Chile'},
    {date: 'Fri, Feb, 28th', venue:'Pepsi Center', location: 'Denver, CO'},
    {date: 'Sun, May, 31st', venue:'Chin Pavilion', location:  'Phoenix, AZ'},
    {date: 'Wed, Jun, 3rd', venue:'Wrigley Field', location: 'Chicago, IL'},
    {date: 'Wed, Jun, 24th', venue:'Fenway Park', location: 'Boston, MA'},
    
];
>>>>>>> 030a1d05757fe2394b66d1cf553f520c7eb32022

const merchItems = [
    {
        type: 'album',
        title: 'Xcalibur',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'a'
    },
    {
        type: 'album',
        title: 'Feast of the Three Amigos',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'b'
    },
    {
        type: 'album',
        title: 'Don\'t Start Nothin\' Won\'t Be Nothin\'',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'c'
    },    
    {
        type: 'tShirt',
        title: 'Zoe T-Shirt',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'd'
    },
    {
        type: 'tShirt',
        title: 'Luke T-Shirt',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'e'
    },
    {
        type: 'tShirt',
        title: 'Mary T-Shirt',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'f'
    },
    {
        type: 'hat',
        title: 'Zoe Hat',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: '3'
    },
    {
        type: 'hat',
        title: 'Mary Hat',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: '2'
    },
    {
        type: 'hat',
        title: 'Luke Hat',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        id: '1'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const buildTourCards = () => {
    let domString = '';
    for(let i = 0; i < tours.length; i++) {
      domString += '<div class="event">';
      domString +=   `<span class="date">${tours[i].date}</span>`;
      domString += `<div class="details">`;
      domString +=   `<div class="venue">${tours[i].venue}</div>`;
      domString +=   `<div class="location">${tours[i].location}</div>`;
      domString += `</div>`;
      domString += '</div>';
    };
    printToDom('tour-dates', domString);
  };

const merchPrinter = (lastArray) => {
    let domString = '';
    for (let i = 0; i < lastArray.length; i++) {
        domString += '<div class="col-md-6 col-lg-4">'
        // domString += '<span class="border border-danger">'
        domString += '<div class="individualCards card" style="width: 20rem;">';
        domString +=    `<img src="${lastArray[i].imgUrl}" classs="card-img-top rounded merchImages" alt="...">`
        domString +=    '<div class="card-body">'
        domString +=       `<h5 class="card-title d-flex justify-content-center">${lastArray[i].title}</h5>'`
        domString +=       `<p class="card-price d-flex justify-content-center">$   ${lastArray[i].price}</p>`
        if (lastArray[i].type === 'tShirt' || lastArray[i].type === 'hat') {
            domString += '<div class="dropdown text-center">'
            domString += '<button class="btn btn-outline-danger dropdown-toggle mb-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>'
            domString += '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">'
            domString +=    '<a class="dropdown-item">Small</a>'
            domString +=    '<a class="dropdown-item">Medium</a>'
            domString +=    '<a class="dropdown-item">Large</a>'
            domString += '</div>'
            domString += '</div>'
        };
        domString +=       `<div class="text-center"><button class="btn btn-outline-danger text-center purchaseButton" id="${merchItems[i].buttonId}">Purchase</button></div>`;
        domString +=    '</div>'
        // domString +=   '</span>'
        domString +=    '</div>'
        domString += '</div>'
    };
    printToDom('merchCards', domString);
    activatePurchaseButton();
};

const activatePurchaseButton = () => {
    let getButton = document.getElementsByClassName("purchaseButton");
    for (let i = 0; i < getButton.length; i++) {
        getButton[i].addEventListener('click', purchaseMerch);
    };
};

const purchaseMerch = () => {
    alert("This item has been to your cart!");
};

const merchSorter = (e) => {
    const sortedMerch = [];
    const buttonId = e.target.id;
    if(buttonId === 'all') {
        merchPrinter(merchItems);
    } else {
        for (let i = 0; i < merchItems.length; i++) {
            if (merchItems[i].type === buttonId) {
                sortedMerch.push(merchItems[i]);
            
            }; 
        };
        merchPrinter(sortedMerch);
    };
};



const event = () => {
    document.getElementById('album').addEventListener('click', merchSorter);
    document.getElementById('tShirt').addEventListener('click', merchSorter);
    document.getElementById('hat').addEventListener('click', merchSorter);
    document.getElementById('all').addEventListener('click', merchSorter);
};

const init = () => {
    // if (window.location.pathname === '.merchandise.html'){
    merchPrinter(merchItems)    
    event();
;
    // };
    // if (window.location.pathname === '/.tour.html') {
    //     buildTourCards();
    // };
};

init();