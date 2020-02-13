// const tours = [ 

//     {date: 'Sun, Feb, 23rd', venue:'For Solo', location: 'Mexico Mexico'},
//     {date: 'Sun, Feb, 24th', venue:'For Solo', location:  'Mexico Mexico'},
//     {date: 'Thu, Feb, 27th', venue:'Festival Del Mar', location: 'Vina Del Chile'},
//     {date: 'Fri, Feb, 28th', venue:'Pepsi Center', location: 'Denver, CO'},
//     {date: 'Sun, May, 31st', venue:'Chin Pavilion', location:  'Phoenix, AZ'},
//     {date: 'Wed, Jun, 3rd', venue:'Wrigley Field', location: 'Chicago, IL'},
//     {date: 'Wed, Jun, 24th', venue:'Fenway Park', location: 'Boston, MA'},
    
// ];

// const merchItems = [
//     {
//         type: 'album',
//         title: 'Xcalibur',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: 'a'
//     },
//     {
//         type: 'album',
//         title: 'Feast of the Three Amigos',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: 'b'
//     },
//     {
//         type: 'album',
//         title: 'Don\'t Start Nothin\' Won\'t Be Nothin\'',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: 'c'
//     },    
//     {
//         type: 'tShirt',
//         title: 'Zoe T-Shirt',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: 'd'
//     },
//     {
//         type: 'tShirt',
//         title: 'Luke T-Shirt',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: 'e'
//     },
//     {
//         type: 'tShirt',
//         title: 'Mary T-Shirt',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: 'f'
//     },
//     {
//         type: 'hat',
//         title: 'Zoe Hat',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: '3'
//     },
//     {
//         type: 'hat',
//         title: 'Mary Hat',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         buttonId: '2'
//     },
//     {
//         type: 'hat',
//         title: 'Luke Hat',
//         price: 5000,
//         imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
//         id: '1'
//     }
// ];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };
// const buildTourCards = () => {
//     let domString = '';
//     for(let i = 0; i < tours.length; i++) {
//       domString += '<div class="event">';
//       domString +=   `<span class="date">${tours[i].date}</span>`;
//       domString += `<div class="details">`;
//       domString +=   `<div class="venue">${tours[i].venue}</div>`;
//       domString +=   `<div class="location">${tours[i].location}</div>`;
//       domString += `</div>`;
//       domString += '</div>';
//     };
//     printToDom('tour-dates', domString);
//   };
//   buildTourCards();

// const merchPrinter = () => {
//     let domString = '';
//     for (let i = 0; i < merchItems.length; i++) {
//         domString += '<div class="col-md-6 col-lg-4">'
//         domString += '<span class="border border-danger">'
//         domString += '<div class="individualCards" class="card mx-1" style="width: 30rem;">';
//         domString +=    `<img src="${merchItems[i].imgUrl}" class="card-img-top rounded" alt="...">`
//         domString +=    '<div class="card-body">'
//         domString +=       `<h5 class="card-title d-flex justify-content-center">${merchItems[i].title}</h5>'`
//         domString +=       `<p class="card-price d-flex justify-content-center">$   ${merchItems[i].price}</p>`
//         if (merchItems[i].type === 'tShirt' || merchItems[i].type === 'hat') {
//             domString += '<div class="dropdown text-center">'
//             domString += '<button class="btn btn-secondary dropdown-toggle mb-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>'
//             domString += '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">'
//             domString +=    '<a class="dropdown-item">Small</a>'
//             domString +=    '<a class="dropdown-item">Medium</a>'
//             domString +=    '<a class="dropdown-item">Largy</a>'
//             domString += '</div>'
//             domString += '</div>'
//         };
//         domString +=       `<div class="text-center"><button class="btn btn-primary text-center purchaseButton" id="${merchItems[i].buttonId}">Purchase</button></div>`;
//         domString +=    '</div>'
//         domString +=   '</span>'
//         domString +=    '</div>'
//         domString += '</div>'
//     };
//     printToDom('merchCards', domString);
//     activatePurchaseButton();
// };

// const activatePurchaseButton = () => {
//     let getButton = document.getElementsByClassName("purchaseButton");
//     for (let i = 0; i < getButton.length; i++) {
//         getButton[i].addEventListener('click', purchaseMerch);
//     };
// };

// purchaseMerch = () => {
//     alert("This item has been to your cart!");
// };
// merchPrinter();

const albumArr = [
    {
    title: "Make Em Shower Cry",
    imgUrl: "./takeit.png",
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
        domString += '<div class="col-md-7 col-lg-4 text-center d-flex">';
        domString +=  '<div>';
        domString +=    `<h3 class="albumTitle">${builderArr[i].title}</h3>`;
        domString +=    `<img src="${builderArr[i].imgUrl}" class="aboutImg" alt="Album cover image">`;
        domString +=     `<div class="btn-group dropup">`
        domString +=      `<button type="button" class="btn btn-secondary dropdown-toggle m-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Show Track List</button>`;
        domString +=       `<div class="dropdown-menu">`
        domString +=        `<a class="dropdown-item">${builderArr[i].trackList.track1}</a>`
        domString +=        `<a class="dropdown-item">${builderArr[i].trackList.track2}</a>`
        domString +=        `<a class="dropdown-item">${builderArr[i].trackList.track3}</a>`
        domString +=        `<a class="dropdown-item">${builderArr[i].trackList.track4}</a>`
        domString +=        `<a class="dropdown-item">${builderArr[i].trackList.track5}</a>`
        domString +=        `<a class="dropdown-item">${builderArr[i].trackList.track6}</a>`
        domString +=        `<a class="dropdown-item">${builderArr[i].trackList.track7}</a>`
        domString +=        `</div>`;
        domString +=      `</div>`;
        domString +=   `</div>`;
        domString += `</div>`
    };
    printToDom('album-list', domString);
    activateButton();
};
const activateButton = () =>{ 
    let getButton = document.getElementsByClassName("trackButton");
for (let i = 0; i < getButton.length; i++) {
    getButton[i].addEventListener('click', trackBuilder);
}; 
}
    albumBuilder(albumArr);

    



