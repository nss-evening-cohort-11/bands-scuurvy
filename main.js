const tours = [ 

    {date: 'Sun, Feb, 23rd', venue:'For Solo', location: 'Mexico Mexico'},
    {date: 'Sun, Feb, 24th', venue:'For Solo', location:  'Mexico Mexico'},
    {date: 'Thu, Feb, 27th', venue:'Festival Del Mar', location: 'Vina Del Chile'},
    {date: 'Fri, Feb, 28th', venue:'Pepsi Center', location: 'Denver, CO'},
    {date: 'Sun, May, 31st', venue:'Chin Pavilion', location:  'Phoenix, AZ'},
    {date: 'Wed, Jun, 3rd', venue:'Wrigley Field', location: 'Chicago, IL'},
    {date: 'Wed, Jun, 24th', venue:'Fenway Park', location: 'Boston, MA'},
    
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
      domString +=   `<div class="venue">${tours[i].venue}</div>`;
      domString +=   `<div class="location">${tours[i].location}</div>`;
      domString += '</div>';
    };
    console.log(domString)
    printToDom('tour-dates', domString);
  };
  buildTourCards();
