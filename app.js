
'use strict'

const timeSlots = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',

];
// function createTable() {
const profileContainer = document.getElementById('cookieTable');

// const article = createChild('article', cookieTable);

// createChild('h2', article, this.locaiton);

// createChild('p', article, this.sales);

// const ul = createChild('tr', article);

const table = createChild('table', profileContainer);

const headerRow = createChild('tr', table);

createChild('th', headerRow);

for (let i = 0; i < timeSlots.length; i++) {
    createChild('th', headerRow, timeSlots[i]);
}

createChild('th', headerRow, 'Daily Total');


// createChild('th', sideRow, 'Seattle');
// createChild('td', th);
// const tr = createChild('tr', table);
// const th = createChild('th', tr);
// const tbody = createChild('td', sideRow);

// createChild('td', dataRow, this.location);
// createChild('th', dataRow, this.sales);
// }

function CookieRow(location, min, max, avgcookies) {
    this.location = location;
    this.sales = sales(min, max, avgcookies);
    // this.int = getRandomInt(23, 65, 6.3);

    // const dataRow = createChild('tr', table);
}



CookieRow.prototype.render = function () {
    const sideRow = createChild('tr', table);
    createChild('td', sideRow, this.location);

    // const tr = createChild('tr', sideRow)
    for (let i = 0; i < this.sales.length; i++) {
        createChild('td', sideRow, this.sales[i])
    }

    createChild('td', sideRow, '900');
}
function createChild(tag, parent, text) {
    const child = document.createElement(tag);
    parent.appendChild(child);

    if (text !== undefined) {
        child.textContent = text;
    }

    return child;

}

// for (let i = 0; i < timeSlots.length; i += 1) {
//     const currentSales = cookieStand.sales[i];
//     const currentTimeSlot = timeSlots[i];
//     hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';
//     let total = 0;
//     for (let i = 0; i < cookieStand.sales.length; i += 1) {
//         const currentSales = cookieStand.sales[i];
//         total += currentSales;
//     }
// }

let seattle = new CookieRow('Seattle', 23, 65, 6.3)

let dubai = new CookieRow('Dubai', 11, 38, 3.7)

let tokyo = new CookieRow('Tokyo', 3, 24, 1.2)
// location: 'Tokyo',
// sales: sales(3, 24, 1.2),


let paris = new CookieRow('Paris', 20, 38, 2.3)
//     location: 'Paris',
//     sales: sales(20, 38, 2.3),
// }

let lima = new CookieRow('Lima', 2, 16, 4.6)
// location: 'Lima',
// sales: sales(2, 16, 4.6),


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt)

// Create a function that creates a new array
// And pushes random ints into every element of the array



function sales(min, max, avgcookies) {
    let arraySales = [];

    for (let i = 0; i < timeSlots.length; i += 1) {
        let value = getRandomInt(min, max)
        let cookieSales = Math.floor(value * avgcookies)
        arraySales.push(cookieSales);
    }
    console.log(arraySales);
    return arraySales;
}

// arrpush(getRandomInt(23, 65));
// let randomInt = getRandomInt(23, 25);
// arrpush(randomInt);

let cookieStand = seattle;

const storeContainerElem = document.getElementById('store-container')

const cityProfileElem = document.getElementById('cityProfiles');


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// renderCookieStand(seattle);
// renderCookieStand(tokyo);
// renderCookieStand(dubai);
// renderCookieStand(paris);
// renderCookieStand(lima);

// function renderCookieStand(cookieStand) {

//     const sectionElem = document.createElement('section');
//     storeContainerElem.appendChild(sectionElem);

//     const locationElem = document.createElement('h2');
//     sectionElem.appendChild(locationElem);
//     locationElem.textContent = cookieStand.location;

//     const hourListElem = document.createElement('ul');
//     sectionElem.appendChild(hourListElem);

//     for (let i = 0; i < timeSlots.length; i += 1) {

//         // need a bunch of lis in the ul
//         // lets do one for now
//         const hourItemElem = document.createElement('li');
//         hourListElem.appendChild(hourItemElem);

//         const currentSales = cookieStand.hourlySales[i];
//         const currentTimeSlot = timeSlots[i];
//         hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';
//     }

//     



//     }
//     // the sum of all the sales for the current cookieStand

//     // need a bunch of lis in the ul
//     // lets do one for now

//     const hourItemElem = document.createElement('li');
//     hourListElem.appendChild(hourItemElem);

//     hourItemElem.textContent = seattle.sixAm;

//     // need last total item

//     const totalItemElem = document.createElement('li');
//     hourListElem.appendChild(totalItemElem);
//     totalItemElem.textContent = 'Total: ' + total + ' cookies';


// 