
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

const profileContainer = document.getElementById('cookieTable');

const table = createChild('table', profileContainer);

const headerRow = createChild('tr', table);

createChild('th', headerRow);

for (let i = 0; i < timeSlots.length; i++) {
    createChild('th', headerRow, timeSlots[i]);
}

createChild('th', headerRow, 'Daily Total');


function CookieRow(location, min, max, avgcookies) {
    this.location = location;
    this.sales = sales(min, max, avgcookies);
    console.log(this.sales);
    // this.int = getRandomInt(23, 65, 6.3);
    CookieRow.stores.push(this);
    // const dataRow = createChild('tr', table);
}

CookieRow.stores = [];

CookieRow.prototype.render = function () {
    const profileContainer = document.getElementById('cookieTable');
    const sideRow = createChild('tr', table);
    createChild('td', sideRow, this.location);

    for (let i = 0; i < this.sales.length; i++) {
        createChild('td', sideRow, this.sales[i])
    }

    let total = 0;
    for (let i = 0; i < this.sales.length; i++) {
        const currentSales = this.sales[i];
        total += currentSales;
    }
    let currentSales = total
    createChild('td', sideRow, currentSales);
}


CookieRow.prototype.renderfooter = function () {
    const tr = createChild('tr', table, 'Hourly Total')
    let total = 0
    for (let i = 0; i < timeSlots.length; i++) {
        let timeTotal = 0
        for (let j = 0; j < CookieRow.stores.length; j++) {
            timeTotal += CookieRow.stores[j].sales[i];

        }
        total += timeTotal;
        console.log(timeTotal);
        createChild('td', tr, timeTotal);
    }
    createChild('td', tr, total);

}

function createChild(tag, parent, text) {
    const child = document.createElement(tag);
    parent.appendChild(child);

    if (text !== undefined) {
        child.textContent = text;
    }

    return child;

}

let seattle = new CookieRow('Seattle', 23, 65, 6.3)

let dubai = new CookieRow('Dubai', 11, 38, 3.7)

let tokyo = new CookieRow('Tokyo', 3, 24, 1.2)

let paris = new CookieRow('Paris', 20, 38, 2.3)

let lima = new CookieRow('Lima', 2, 16, 4.6)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt)


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


const storeContainerElem = document.getElementById('store-container')

const cityProfileElem = document.getElementById('cityProfiles');


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

seattle.renderfooter();

