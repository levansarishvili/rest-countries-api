"use strict";

const body = document.querySelector("body");
const colorSwitcherBtn = document.querySelector(".color-switcher-btn");
const countryCardsContainer = document.querySelector(".section-country-cards");
const searchInput = document.querySelector(".search-input");
const countryCardWrappers = document.querySelectorAll(".country-card-wrap");

const dropDownButton = document.querySelector(".filter-dropdown__btn");
const optionsContainer = document.querySelector(".filter-dropdown__options");

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

let allCountriesData = [];

// Function to render error message for users
const renderError = (message) => {
  countryCardsContainer.insertAdjacentText("beforeend", `${message}`);
};

// Function to get all country data from API
const getAllCountryData = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((data) => {
      allCountriesData = data;
      renderCountry(data);
      console.log(allCountriesData);
    })
    .catch((err) => {
      console.log(`${err}`);
      renderError(`Something went wrong ⚠️⚠️⚠️ ${err.message}. Try again!`);
    });
};
getAllCountryData();

// Function to render country card
const renderCountry = (data) => {
  countryCardsContainer.innerHTML = ""; // Clear existing country cards
  data.forEach((el) => {
    if (el.population >= 1000000) {
      const countryCardHtml = `
        <a class="country-card-wrap" href="detail.html" data-country="${
          el.name.common
        }">
               <div class="country-card">
                <div class="country-card__img-wrap">
                   <img
                     class="country-card__img"
                     src="${el.flags.png}"
                     alt="Country flag"
                   />
                 </div>
                 <div class="country-card__desc">
                   <h2 class="country-card__header">${el.name.common}</h2>
                   <div class="country-card__details">
                     <p class="country-card__population">
                       <strong>Population:</strong> ${(
                         el.population / 1000000
                       ).toFixed(1)}M
                     </p>
                     <p class="country-card__region">
                       <strong>Region:</strong> ${el.region}
                     </p>
                     <p class="country-card__capital">
                       <strong>Capital:</strong> ${el.capital[0]}
                     </p>
                   </div>
                 </div>
               </div>
             </a>
       `;
      countryCardsContainer.insertAdjacentHTML("beforeend", countryCardHtml);
    }
  });
};

// Search input functionality
document.addEventListener("DOMContentLoaded", () => {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const searchedCountry = searchInput.value.toLowerCase();
      searchInput.value = "";
      const filteredCountries = allCountriesData.filter((country) =>
        country.name.common.toLowerCase().startsWith(searchedCountry)
      );
      renderCountry(filteredCountries);
    }
  });
});

// =============== Filter Dropdown List ===============
document.addEventListener("DOMContentLoaded", () => {
  dropDownButton.addEventListener("click", () => {
    optionsContainer.classList.toggle("hidden");
  });

  optionsContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("filter-dropdown__option")) {
      const region = target.textContent.toLowerCase();
      optionsContainer.classList.add("hidden");
      console.log(region);

      const filteredCountries = allCountriesData.filter((country) => {
        country.region.toLowerCase().includes(region);
      });
      console.log(filteredCountries);
      renderCountry(filteredCountries);
    }
  });
});
