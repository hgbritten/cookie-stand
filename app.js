

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
let seattle = {
    location: 'Seattle',
    hourlySales: hourlySales(23, 65, 6.5),
    // sixAm: '6am: 16 cookies',
    // sevenAm: '7am: 20 cookies',
    // eightAm: '8am: 35 cookies',
    // nineAm: '9am: 48 cookies',
    // tenAm: '10am: 56 cookies',
    // elevenAm: '11am: 77 cookies',
    // twelveNoon: '12pm: 93 cookies',
    // onePm: '1pm: 144 cookies',
    // twoPm: '2pm: 119 cookies',
    // threePm: '3pm: 84 cookies',
    // fourPm: '4pm: 61 cookies',
    // fivePm: '5pm: 23 cookies',
    // sixPm: '6pm: 42 cookies',
    // sevenPm: '7pm: 57 cookies',
    // total: 'Total: 875 cookies',
}
const dubai = {
    location: 'Dubai',
    hourlySales: hourlySales(11, 38, 3.7),
}

const tokyo = {
    location: 'Tokyo',
    hourlySales: hourlySales(3, 24, 1.2),
}

const paris = {
    location: 'Paris',
    hourlySales: hourlySales(20, 38, 2.3),
}

const lima = {
    location: 'Lima',
    hourlySales: hourlySales(2, 16, 4.6),
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt)

// Create a function that creates a new array
// And pushes random ints into every element of the array

console.log(hourlySales(23, 65, 6.3));

function hourlySales(min, max, avgcookies) {
    let arraySales = [];
    for (i = 0; i < timeSlots.length; i += 1) {
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

renderCookieStand(seattle);
renderCookieStand(tokyo);
renderCookieStand(dubai);
renderCookieStand(paris);
renderCookieStand(lima);

function renderCookieStand(cookieStand) {

    const sectionElem = document.createElement('section');
    storeContainerElem.appendChild(sectionElem);

    const locationElem = document.createElement('h2');
    sectionElem.appendChild(locationElem);
    locationElem.textContent = cookieStand.location;

    const hourListElem = document.createElement('ul');
    sectionElem.appendChild(hourListElem);

    for (let i = 0; i < timeSlots.length; i += 1) {

        // need a bunch of lis in the ul
        // lets do one for now
        const hourItemElem = document.createElement('li');
        hourListElem.appendChild(hourItemElem);

        const currentSales = cookieStand.hourlySales[i];
        const currentTimeSlot = timeSlots[i];
        hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';
    }

    let total = 0;


    for (let i = 0; i < cookieStand.hourlySales.length; i += 1) {
        const currentSales = cookieStand.hourlySales[i];
        total += currentSales;
    }
    // the sum of all the sales for the current cookieStand

    // need a bunch of lis in the ul
    // lets do one for now

    const hourItemElem = document.createElement('li');
    hourListElem.appendChild(hourItemElem);

    hourItemElem.textContent = seattle.sixAm;

    // need last total item

    const totalItemElem = document.createElement('li');
    hourListElem.appendChild(totalItemElem);
    totalItemElem.textContent = 'Total: ' + total + ' cookies';


}

