"use strict";

const countryCardsContainer = document.querySelector(".section-country-cards");
const searchInput = document.querySelector(".search-input");
const countryCardWrappers = document.querySelectorAll(".country-card-wrap");

const dropDownButton = document.querySelector(".filter-dropdown__btn");
const optionsContainer = document.querySelector(".filter-dropdown__options");

// =============== Get Country Data from Rest Country API ===============

let allCountriesData = [];

// Function to render error message for users
const renderError = (message) => {
  countryCardsContainer.insertAdjacentText("beforeend", `${message}`);
};

// Function to get all country data from API
const getAllCountryData = async () => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    if (!response.ok) throw new Error("All country data didn't load!");
    const data = await response.json();

    allCountriesData = data;
    renderCountry(data);
  } catch (error) {
    console.log(error);
    renderError(`⚠ ${error.message}`);
  }
};

getAllCountryData();

// Function to render country card
const renderCountry = (data) => {
  countryCardsContainer.innerHTML = ""; // Clear existing country cards

  data.forEach((el) => {
    if (el.population >= 700000) {
      const countryCardHtml = `
        <a class="country-card-wrap" href="detail.html?code=${
          el.cca3
        }" data-country-code="${el.cca3}">
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
      countryCardsContainer.style.opacity = 1;
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
      // Create filtered countries data
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

    // Check if clicked element is filter dropdown option
    if (target.classList.contains("filter-dropdown__option")) {
      const region = target.textContent.toLowerCase();
      optionsContainer.classList.add("hidden");

      // Create filtered countries data
      const filteredCountriesData = allCountriesData.filter((country) =>
        country.region.toLowerCase().includes(region)
      );

      // Render countries filtered by region
      renderCountry(filteredCountriesData);
    }
  });
});

// Get country code when click country card
let countryCode;

countryCardsContainer.addEventListener("click", (e) => {
  // Check if clicked element is country card
  const target = e.target.closest(".country-card-wrap");
  if (target && target.classList.contains("country-card-wrap")) {
    countryCode = target.getAttribute("data-country-code");
    console.log(countryCode);
  }
});
