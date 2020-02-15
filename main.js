
const homeVideos = [
    {videoUrl:"https://youtube.com/embed/yRZ-UF4do-A", id: "vid1"},
    {videoUrl:"https://youtube.com/embed/dZTwj26wuFY", id: "vid2"},
    {videoUrl:"https://youtube.com/embed/IWN-NnChQRw", id: "vid3"},
    {videoUrl:"https://youtube.com/embed/kxfEPoDoR3A", id: "vid4"}
];

const tourArray = [ 
    {date: 'Sun, Feb, 23rd', venue:'For Solo', location: 'Mexico Mexico'},
    {date: 'Sun, Feb, 24th', venue:'For Solo', location:  'Mexico Mexico'},
    {date: 'Thu, Feb, 27th', venue:'Festival Del Mar', location: 'Vina Del Chile'},
    {date: 'Fri, Feb, 28th', venue:'Pepsi Center', location: 'Denver, CO'},
    {date: 'Sun, May, 31st', venue:'Chin Pavilion', location:  'Phoenix, AZ'},
    {date: 'Wed, Jun, 3rd', venue:'Wrigley Field', location: 'Chicago, IL'},
    {date: 'Wed, Jun, 24th', venue:'Fenway Park', location: 'Boston, MA'},   
];

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
        price: 89.53,
        imgUrl: 'bandpics/icecreamalbum.png',
        buttonId: 'a',
        description: 'All the hits from years past'
    },
    {
        type: 'album',
        title: 'What Day Is It',
        price: 52.24,
        imgUrl: 'bandpics/girlsalbum.png',
        buttonId: 'b',
        description: 'Recorded live in Paris, Kentucky'
    },
    {
        type: 'album',
        title: 'Make Em Shower Cry',
        price: 48.57,
        imgUrl: 'bandpics/takeit.png',
        buttonId: 'c',
        description: 'Multi-platinum, grammy nominated, debut album'
    },    
    {
        type: 'tShirt',
        title: 'Zoe T-Shirt',
        price: 23.58,
        imgUrl: 'https://i.imgur.com/r9tz26G.png',
        buttonId: 'd',
        description: 'Where it all started'
    },
    {
        type: 'tShirt',
        title: 'Luke T-Shirt',
        price: 8.99,
        imgUrl: 'https://i.imgur.com/EA34ZF7.png',
        buttonId: 'e',
        description: 'Sizing runs small'
    },
    {
        type: 'tShirt',
        title: 'Mary T-Shirt',
        price: 14.63,
        imgUrl: 'https://i.imgur.com/OiAaEap.png',
        buttonId: 'f',
        description: 'Deals like this don\'t happen everyday!'
    },
    {
        type: 'tShirt',
        title: 'Greg T-Shirt',
        price: 45.25,
        imgUrl: 'https://i.imgur.com/0vNM6lA.png',
        buttonId: 'r',
        description: 'Fit in with all the cool kids'
    },
    {
        type: 'hat',
        title: 'Zoe Hat',
        price: 10.99,
        imgUrl: 'https://i.imgur.com/GY6iLC6.jpg',
        buttonId: '3',
        description: 'On clearance!!'
    },
    {
        type: 'hat',
        title: 'Mary Hat',
        price: 15.88,
        imgUrl: 'https://i.imgur.com/0pStUHE.png',
        buttonId: '2',
        description: 'Get em while they last!!'
    },
    {
        type: 'hat',
        title: 'Luke Hat',
        price: 26.78,
        imgUrl: 'https://i.imgur.com/MhCy87C.png',
        id: '1',
        description: 'Dead stock'
    },
    {
        type: 'hat',
        title: 'Greg Hat',
        price: 5000,
        imgUrl: 'https://i.imgur.com/KmeQkcu.png',
        id: '10',
        description: 'Makes a great gift!'
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
        domString += '<div class="col-md-6 col-lg-4" id="merchCardContainer">'
        domString += '<div class="individualCards card bg-dark" style="width: 20rem;">';
        domString +=    `<img src="${lastArray[i].imgUrl}" class="card-img-top rounded merchImages" alt="...">`
        domString +=    '<div class="card-body">'
        domString +=       `<h5 class="card-title d-flex justify-content-center">${lastArray[i].title}</h5>`
        domString +=    `<p class="card-description d-flex justify-content-center">${lastArray[i].description}</p>`
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
};

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
        domString += '<div class="d-flex justify-content-center flex-wrap rows row-col-4">'
        domString += `<iframe width="560" height="315" class="videos" src="${homeVideos[i].videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        domString += `</div>`
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

const aboutInit =()=>{
    albumBuilder(albumArr);
};

const merchInit = () => {
    merchPrinter(merchItems);   
    merchEvent();
};

const tourInit = () => {
    buildTourCards(tourArray)
    tourEvent();
    buildTourPhoto();
};
