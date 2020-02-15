
const homeVideos = [
    {videoUrl:"https://youtube.com/embed/yRZ-UF4do-A", id: "vid1"},
    {videoUrl:"https://youtube.com/embed/dZTwj26wuFY", id: "vid2"},
    {videoUrl:"https://youtube.com/embed/IWN-NnChQRw", id: "vid3"},
    {videoUrl:"https://youtube.com/embed/kxfEPoDoR3A", id: "vid4"}
]

const tourArray = [ 
    {date: 'Sun, Feb, 23rd', venue:'For Solo', location: 'Mexico Mexico'},
    {date: 'Sun, Feb, 24th', venue:'For Solo', location:  'Mexico Mexico'},
    {date: 'Thu, Feb, 27th', venue:'Festival Del Mar', location: 'Vina Del Chile'},
    {date: 'Fri, Feb, 28th', venue:'Pepsi Center', location: 'Denver, CO'},
    {date: 'Sun, May, 31st', venue:'Chin Pavilion', location:  'Phoenix, AZ'},
    {date: 'Wed, Jun, 3rd', venue:'Wrigley Field', location: 'Chicago, IL'},
    {date: 'Wed, Jun, 24th', venue:'Fenway Park', location: 'Boston, MA'},   
];

const albumArr = [
    {
    title: "Make Em Shower Cry",
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

const merchItems = [
    {
        type: 'album',
        title: 'Rubber Duck',
        price: 5000,
        imgUrl: 'bandpics/icecreamalbum.png',
        buttonId: 'a'
    },
    {
        type: 'album',
        title: 'What Day Is It',
        price: 5000,
        imgUrl: 'bandpics/girlsalbum.png',
        buttonId: 'b'
    },
    {
        type: 'album',
        title: 'Make Em Shower Cry',
        price: 5000,
        imgUrl: 'bandpics/takeit.png',
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
        type: 'tShirt',
        title: 'Greg T-Shirt',
        price: 5000,
        imgUrl: 'https://i.imgur.com/0vNM6lA.png',
        buttonId: 'r'
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

const albumBuilder = (builderArr)=> {
    let domString = "";
    for (let i = 0; i < builderArr.length; i++){
        domString += '<div class="col-md-7 col-lg-4 text-center d-flex">';
        domString +=  '<div>';
        domString +=    `<h3 class="albumTitle">${builderArr[i].title}</h3>`;
        domString +=    `<img src="${builderArr[i].imgUrl}" class="aboutImg zoom hover  " alt="Album cover image">`;
        domString +=     `<div class="btn-group dropup">`
        domString +=      `<button type="button" class="btn btn-secondary dropdown-toggle ml-4 mr-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Show Track List</button>`;
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
        domString +=       `<div class="text-center"><button class="btn btn-danger text-center" class="purchaseButton" id="${merchItems[i].buttonId}">Purchase</button></div>`;
        domString +=    '</div>'
        domString +=    '</div>'
        domString += '</div>'
    };
    printToDom('merchCards', domString);
    activatePurchaseButton();
};

const el = document.getElementById("subscribeButton");

const tourInit = () => {
    buildTourCards(tours)
    tourEvent();
    buildTourPhoto();
};

// const tourEvent = () => {
//     el.addEventListener('click', submitForm);

// }


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
    {imgUrl: "https://i.imgur.com/dQFoCkr.png"},
    {imgUrl: "https://i.imgur.com/VRfGkU6.png"},
    {imgUrl: "https://i.imgur.com/kcBxuBB.png"},
];

const buildTourPhoto = () => {
    let domString = '';
    for(let i = 0; i < tourImageArray.length; i++) {   
    domString+=`<div class="tour-card" style="width: 18rem;">`
    domString+= `<img class="tour-picture" src="${tourImageArray[i].imgUrl}" alt="Card image cap">`
    domString+= `</div>`
    };
    printToDom('tour-photos', domString);
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
const videoBuilder = () => {
    let domString = '';
     for (let i = 0; i < homeVideos.length; i++) {
        domString += `<div class="d-flex flex-wrap justify-content-center card border-dark mb-3">`
        domString += `<div class="videos">`
        domString += `<iframe width="560" height="315" src="${homeVideos[i].videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        domString += ` </div>`
    }
printToDom('loopVideos',domString);
};


const activateButton = () =>{ 
    let getButton = document.getElementsByClassName("trackButton");
    for (let i = 0; i < getButton.length; i++) {
    getButton[i].addEventListener('click', trackBuilder);
    }; 
};

const activatePurchaseButton = () =>{ 
    for (let i = 0; i < merchItems.length; i++){
        document.getElementById(merchItems[i].buttonId).addEventListener('click', purchaseMerch);
    };
};

const purchaseMerch = () => {
    console.log('click')
    alert("This item has been to your cart!");
};

const submitForm = () => {
    alert ("Thank you for subscribing!");
};

const tourEvent = () => {
    document.getElementById("subscribeButton").addEventListener('click', submitForm);
};

const merchEvent = () => {

    document.getElementById('album').addEventListener('click', merchSorter);
    document.getElementById('tShirt').addEventListener('click', merchSorter);
    document.getElementById('hat').addEventListener('click', merchSorter);
    document.getElementById('all').addEventListener('click', merchSorter);
};
const homeInit = () => {
    videoBuilder(homeVideos);
}
const aboutInit = () =>{
    albumBuilder(albumArr);
};

const merchInit = () => {
    merchPrinter(merchItems);    
    merchEvent();
};



