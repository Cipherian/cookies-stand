"use strict";

// The minimum number of customers per hour
// The maximum number of customers per hour
// The average number of cookies purchased per customer

// const cookieSeattle = ['Seattle', 23, 65, 6.3 ];
// const cookieTokyo = ['Tokyo', 3, 24, 1.2];
// const cookieDubai = ['Dubai', 11, 38, 3.7];
// const cookieParis = ['Paris', 20, 38, 2.3];
// const cookieLima = ['Lima', 2, 16, 4.6];

// let salmonCookies =  {
//   location: location,
//   minCustomers: minCustomers,
//   maxCustomers: maxCustomers,
//   aveCookieSale: aveCookieSale,
//   customersperHour: Math.round(Math.random((minCustomers + maxCustomers) / 2)),
//   cookiesArray: [],
// }
// Do I need to push?
// function calculateCookiesSale() {
//   return SalmonCookies.customersperHour * SalmonCookies.aveCookieSale
// }

// // <ul>
// // <li></li>

// function render() {
//       for (let i = 0; i < storeHours.length; i++) {
//         let salmonCookiesTime = document.createElement('ul');
//         salmonCookiesTime.textContent = storeHours[i];
//       }
let salmonCookies = [
  {
    location: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    averageCookie: 6.3,
  },
  {
    location: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    averageCookie: 1.2,
  },
  {
    location: "Dubai",
    minCustomers: 11,
    maxCustomers: 38,
    averageCookie: 3.7,
  },
  {
    location: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    averageCookie: 2.3,
  },
  {
    location: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    averageCookie: 4.6,
  },
];

let storeHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];
//Thank you to Adamn Owada and David Souther for the help
function calculateCookiesSold() {
  for (let i = 0; i < salmonCookies.length; i++) {
    let salmonCookie = salmonCookies[i];
    for (let j = 0; j < storeHours.length; j++) {
      let storeHour = storeHours[j];
      let randomCustomers = Math.floor(
        salmonCookie.minCustomers +
          Math.random() *
            (salmonCookie.maxCustomers - salmonCookie.minCustomers)
      );
      let cookiesSold = Math.floor(
        randomCustomers * salmonCookie.averageCookie
      );
      // console.log(
        // `${storeHour} ${randomCustomers} customers in ${salmonCookie.location}`
      // );
      // console.log(cookiesSold + " cookies sold");
      let cookieSummary = document.createElement("li");
      cookieSummary.innerText = `${storeHour}: ${salmonCookie.location} sold ${cookiesSold} cookies`;
      document.getElementById("orders")?.appendChild(cookieSummary);
    }
  }
}
function displayTime() {
  for (let i = 0; i < storeHours.length; i++) {
    let timeOpen = storeHours[i];
    console.log(timeOpen);
  }
}

displayTime();
calculateCookiesSold();