
const tourArray = [ 
    {date: 'Sun, Feb, 23rd', venue:'For Solo', location: 'Mexico Mexico'},
    {date: 'Sun, Feb, 24th', venue:'For Solo', location:  'Mexico Mexico'},
    {date: 'Thu, Feb, 27th', venue:'Festival Del Mar', location: 'Vina Del Chile'},
    {date: 'Fri, Feb, 28th', venue:'Pepsi Center', location: 'Denver, CO'},
    {date: 'Sun, May, 31st', venue:'Chin Pavilion', location:  'Phoenix, AZ'},
    {date: 'Wed, Jun, 3rd', venue:'Wrigley Field', location: 'Chicago, IL'},
    {date: 'Wed, Jun, 24th', venue:'Fenway Park', location: 'Boston, MA'},   
];

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
    for(let i = 0; i < tourArray.length; i++) {
      domString += '<div class="event">';
      domString +=   `<span class="date">${tourArray[i].date}</span>`;
      domString += `<div class="details">`;
      domString +=   `<div class="venue">${tourArray[i].venue}</div>`;
      domString +=   `<div class="location">${tourArray[i].location}</div>`;
      domString += `</div>`;
      domString += '</div>';
    };
    printToDom('tour-dates', domString);
  };
  buildTourCards();

const merchPrinter = () => {
    let domString = '';
    for (let i = 0; i < merchItems.length; i++) {
        domString += '<div class="col-md-6 col-lg-4">'
        domString += '<span class="border border-danger">'
        domString += '<div class="individualCards" class="card mx-1" style="width: 30rem;">';
        domString +=    `<img src="${merchItems[i].imgUrl}" class="card-img-top rounded" alt="...">`
        domString +=    '<div class="card-body">'
        domString +=       `<h5 class="card-title d-flex justify-content-center">${merchItems[i].title}</h5>'`
        domString +=       `<p class="card-price d-flex justify-content-center">$   ${merchItems[i].price}</p>`
        if (merchItems[i].type === 'tShirt' || merchItems[i].type === 'hat') {
            domString += '<div class="dropdown text-center">'
            domString += '<button class="btn btn-secondary dropdown-toggle mb-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>'
            domString += '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">'
            domString +=    '<a class="dropdown-item">Small</a>'
            domString +=    '<a class="dropdown-item">Medium</a>'
            domString +=    '<a class="dropdown-item">Largy</a>'
            domString += '</div>'
            domString += '</div>'
        };
        domString +=       `<div class="text-center"><button class="btn btn-primary text-center purchaseButton" id="${merchItems[i].buttonId}">Purchase</button></div>`;
        domString +=    '</div>'
        domString +=   '</span>'
        domString +=    '</div>'
        domString += '</div>'
    };
    // printToDom('merchCards', domString);
    // activatePurchaseButton();
};

const activatePurchaseButton = () => {
    let getButton = document.getElementsByClassName("purchaseButton");
    for (let i = 0; i < getButton.length; i++) {
        getButton[i].addEventListener('click', purchaseMerch);
    };
};

purchaseMerch = () => {
    alert("This item has been to your cart!");
};
// merchPrinter();

const el = document.getElementById("subscribeButton");
const submitForm = () => {
    alert ("Thank you for subscribing!");
};

const tourInit = () => {
    buildTourCards(tourArray)
    tourEvent();
};

const tourEvent = () => {
    el.addEventListener('click', submitForm);

}

const tourImageArray = [
    {imgUrl: "https://i.imgur.com/P5tfqfW.png"},
    {imgUrl: "https://i.imgur.com/2ukHHTx.png"},
    {imgUrl: "https://i.imgur.com/IzCg99m.png"},
    {imgUrl: "https://i.imgur.com/mxr4RTQ.png"},
    {imgUrl: "https://i.imgur.com/SGjuwVh.png"},
    {imgUrl: "https://i.imgur.com/or86tp6.png"},
    {imgUrl: "https://i.imgur.com/xcOBNBW.png"},
    {imgUrl: "https://i.imgur.com/pnnPLox.png"},
    {imgUrl: "https://i.imgur.com/fSlbZ4H.png"},
];

const buildTourPhoto = () => {
    let domString = '';
    for(let i = 0; i < tourImageArray.length; i++) {
    domString+= `<div class="card" style="width: 18rem;">`
    domString+= `<img class="card-img-top" src="${tourImageArray[i].imgUrl}" alt="Card image cap">`
    domString+= `<div class="card-body">`
    domString+= `</div>`
    };
      printToDom('tour-photos', domString);
    };
    buildTourPhoto();

