"use strict";

const body = document.querySelector("body");
const colorSwitcherBtn = document.querySelector(".color-switcher-btn");
const countryCardsContainer = document.querySelector(".section-country-cards");

// =============== Color Mode Switcher ===============

let darkmode = localStorage.getItem("darkmode");

const enableDarkmode = () => {
  body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

colorSwitcherBtn.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// =============== Get Country Data from Rest Country API ===============

const renderCountry = (data) => {
  const countryCardHtml = `
    <a class="country-card-wrap" href="detail.html">
           <div class="country-card">
            <div class="country-card__img-wrap">
               <img
                 class="country-card__img"
                 src="${data.flags.png}"
                 alt="Country flag"
               />
             </div>
             <div class="country-card__desc">
               <h2 class="country-card__header">${data.name.common}</h2>
               <div class="country-card__details">
                 <p class="country-card__population">
                   <strong>Population:</strong> ${(
                     data.population / 1000000
                   ).toFixed(1)}M
                 </p>
                 <p class="country-card__region">
                   <strong>Region:</strong> ${data.region}
                 </p>
                 <p class="country-card__capital">
                   <strong>Capital:</strong> ${data.capital[0]}
                 </p>
               </div>
             </div>
           </div>
         </a>
   `;

  countryCardsContainer.insertAdjacentHTML("beforeend", countryCardHtml);
};

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData("japan");
getCountryData("usa");
getCountryData("germany");
getCountryData("italy");
getCountryData("france");
getCountryData("argentina");
