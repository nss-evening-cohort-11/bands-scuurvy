const merchItems = [
    {
        type: 'album',
        title: 'Album: Xcalibur',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'a'
    },
    {
        type: 'album',
        title: 'Album: Feast of the Three Amigos',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'b'
    },
    {
        type: 'album',
        title: 'Album: Don\'t Start Nothin\' Wont\'t Be Nothin\'',
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
        buttonId: 'g'
    },
    {
        type: 'hat',
        title: 'Mary Hat',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'h'
    },
    {
        type: 'hat',
        title: 'Luke Hat',
        price: 5000,
        imgUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=790&q=80',
        buttonId: 'o'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const merchPrinter = () => {
    let domString = '';
    for (let i = 0; i < merchItems.length; i++) {
        domString += '<div class="inividualCards" class="card" style="width: 30rem;">';
        domString +=    `<img src="${merchItems[i].imgUrl} "class="card-img-top" alt="...">`
        domString +=    '<div class="card-body">'
        domString +=       `<h5 class="card-title d-flex justify-content-center">${merchItems[i].title}</h5>'`
        domString +=       `<p class="card-price d-flex justify-content-center">$   ${merchItems[i].price}</p>`
        domString +=       `<button class="btn btn-primary justify-content-center" id="${merchItems[i].buttonId}">Purchase</button>`;
        document.getElementById(merchItems[i].buttonId).addEventListener('click', purchaseButton);
        domString +=    '</div>'
        domString +=    '</div>'
    };
    printToDom('merchCards', domString)
    // document.getElementById(merchItems.buttonId).addEventListener('click', purchaseButton);
};

const purchaseButton = () => {
    alert('This item has been added to your cart!');
}

merchPrinter();