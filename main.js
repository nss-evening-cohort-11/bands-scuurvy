const tours = [ 

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
        imgUrl: 'https://i.imgur.com/r9tz26G.png',
        buttonId: 'd'
    },
    {
        type: 'tShirt',
        title: 'Luke T-Shirt',
        price: 5000,
        imgUrl: 'https://i.imgur.com/EA34ZF7.png',
        buttonId: 'e'
    },
    {
        type: 'tShirt',
        title: 'Mary T-Shirt',
        price: 5000,
        imgUrl: 'https://i.imgur.com/OiAaEap.png',
        buttonId: 'f'
    },
    {
        type: 'hat',
        title: 'Zoe Hat',
        price: 5000,
        imgUrl: 'https://i.imgur.com/GY6iLC6.jpg',
        buttonId: '3'
    },
    {
        type: 'hat',
        title: 'Mary Hat',
        price: 5000,
        imgUrl: 'https://i.imgur.com/0pStUHE.png',
        buttonId: '2'
    },
    {
        type: 'hat',
        title: 'Luke Hat',
        price: 5000,
        imgUrl: 'https://i.imgur.com/MhCy87C.png',
        id: '1'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const buildTourCards = (tourArray) => {
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

  const merchPrinter = (lastArray) => {
    let domString = '';
    for (let i = 0; i < lastArray.length; i++) {
        domString += '<div class="col-md-6 col-lg-4">'
        domString += '<div class="individualCards card" style="width: 20rem;">';
        domString +=    `<img src="${lastArray[i].imgUrl}" class="card-img-top rounded merchImages" alt="...">`
        domString +=    '<div class="card-body">'
        domString +=       `<h5 class="card-title d-flex justify-content-center">${lastArray[i].title}</h5>`
        domString +=       `<p class="card-price d-flex justify-content-center">$   ${lastArray[i].price}</p>`
        if (lastArray[i].type === 'tShirt' || lastArray[i].type === 'hat') {
            domString += '<div class="dropdown text-center">'
            domString += '<button class="btn btn-danger dropdown-toggle mb-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>'
            domString += '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">'
            domString +=    '<a class="dropdown-item">Small</a>'
            domString +=    '<a class="dropdown-item">Medium</a>'
            domString +=    '<a class="dropdown-item">Large</a>'
            domString += '</div>'
            domString += '</div>'
        };
        domString +=       `<div class="text-center"><button class="btn btn-danger text-center purchaseButton" id="${merchItems[i].buttonId}">Purchase</button></div>`;
        domString +=    '</div>'
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

const el = document.getElementById("subscribeButton");
const submitForm = () => {
    alert ("Thank you for subscribing!");
    
};
const albumArr = [
    {
    title: "Make Em Shower Cry",
    imgUrl: "./takeit.png",
    imgUrl: "bandpics/takeit.png",
    buttonId: "MakeEmShowerCry",
    trackList: {
        track1: "Go Google it",
        track2: "Nope Not it",
        track3: "Keep Looking",
        track4: "Maybe for Pie",
        track5: "But Mary Said",
        track6: "Class is not the Place",
        track7: "Shower Cry"
        }
    },
    {
    title: "What Day Is It",
    imgUrl: "girlsalbum.png",
    imgUrl: "bandpics/girlsalbum.png",
    buttonId: "WhatDayIsIt",
    trackList: {
        track1: "Everyday I'm Co--de-in",
        track2: "I Don't Dare",
        track3: "Code Day-ya",
        track4: "Girls just want to Code",
        track5: "Tell Your Social Life Good-bye",
        track6: "The Python Programming Song",
        track7: "Let it Code"
        }
    },
    {
    title: "Rubber Duck",
    imgUrl: "icecreamalbum.png",
    imgUrl: "bandpics/icecreamalbum.png",
    buttonId: "RubberDuck",
    trackList: {
        track1: "Please Help",
        track2: "I Can't Get It",
        track3: "Black fly in your Coding",
        track4: "Well Isn't Nice",
        track5: "Rubber Duck Silence",
        track6: "Crashin Computers",
        track7: "Coding Reject"
        }
    }
];
const albumBuilder = (builderArr)=> {
    let domString = "";
    for (let i = 0; i < builderArr.length; i++){
        domString += '<div class="col-xs-3 col-sm-4 album">';
        domString +=  '<div class="overlay-item overlay-effect">';
        domString +=    `<img src=${builderArr[i].imgUrl} alt="" />`;
        domString +=    `<div class="mask">`;
        domString +=        `<h3>Track List</h3>`;
        domString +=        `<p>${builderArr[i].trackList.track1}</br>${builderArr[i].trackList.track2}</br>${builderArr[i].trackList.track3}</br>${builderArr[i].trackList.track4}</br>${builderArr[i].trackList.track5}</br>${builderArr[i].trackList.track6}</br>${builderArr[i].trackList.track7}</p>`;
        domString +=        `<a href="./merchandise.html" class="btn btn-danger">Purchase Here</a>`;
        domString +=    `</div>`;
        domString +=  `</div>`;
        domString +=    `<h4 class="text-center">${builderArr[i].title}</h4>`;
        domString += `</div>`
    };
    printToDom('album-list', domString);
}
const aboutInit =()=>{
    albumBuilder(albumArr);

}
const tourInit = () => {
    buildTourCards(tours);
    tourEvent();
};

const tourEvent = () => {
    el.addEventListener('click', submitForm);
}

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

const merchEvent = () => {
    document.getElementById('album').addEventListener('click', merchSorter);
    document.getElementById('tShirt').addEventListener('click', merchSorter);
    document.getElementById('hat').addEventListener('click', merchSorter);
    document.getElementById('all').addEventListener('click', merchSorter);
};

const merchInit = () => {
    merchPrinter(merchItems);   
    merchEvent();
};