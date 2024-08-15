"use strict";

// =============== Get more detailed country data  ===============

document.addEventListener("DOMContentLoaded", async () => {
  const countryDetailsContainer = document.querySelector(
    ".country-details-wrap"
  );

  // Function to render country details
  const renderCountryDetails = (data) => {
    const countryDetailHtml = `
            <!-- Country Flag Image -->
            <div class="country-details__img-wrap">
              <img
                class="country-details__img"
                src="${data.flags.png}"
                alt="Country flag"
              />
            </div>

            <div class="country-details__desc-wrap">
              <h2 class="country-details__desc__title">${data.name.common}</h2>

              <div class="country-details__desc">
                <!-- Main Description of Country -->
                <div class="details__desc__main">
                  <p class="details__desc__name">
                    <strong>Native Name:</strong> ${data.name.official}
                  </p>
                  <p class="details__desc__population">
                    <strong>Population:</strong> ${(
                      data.population / 1000000
                    ).toFixed(1)}M
                  </p>
                  <p class="details__desc__region">
                    <strong>Region:</strong> ${data.region}
                  </p>
                  <p class="details__desc__sub-region">
                    <strong>Sub Region:</strong> ${data.subregion}
                  </p>
                  <p class="details__desc__capital">
                    <strong>Capital:</strong> ${data.capital[0]}
                  </p>

                  <p class="details__desc__domain">
                    <strong>Top Level Domain:</strong> ${data.tld[0]}
                  </p>
                  <p class="details__desc__currencies">
                    <strong>Currencies:</strong> ${Object.keys(data.currencies)}
                  </p>
                  <p class="details__desc__languages">
                    <strong>Languages:</strong> ${Object.values(
                      data.languages
                    ).join(", ")}
                  </p>
                </div>

                <!-- Border Countries -->
                <div class="details__desc__border-countries-wrap">
                  <p class="border-countries__title">
                    <strong>Border Countries:</strong>
                  </p>
                  <div class="border-countries">   
                  </div>
                </div>
              </div>
            </div>
       
    `;

    countryDetailsContainer.insertAdjacentHTML("beforeend", countryDetailHtml);

    const borderCountriesContainer =
      document.querySelector(".border-countries");

    // Add border countries
    if (data.borders && data.borders.length > 0) {
      for (let i = 0; i < data.borders.length; i++) {
        const borderCountryHtml = `
        <a href="" class="border-country">
          ${data.borders[i]}
        </a>`;

        borderCountriesContainer.insertAdjacentHTML(
          "beforeend",
          borderCountryHtml
        );
      }

      // const borderCountries = document.querySelectorAll(".border-country");
      // // Render border Country's details
      // borderCountries.forEach((el) =>
      //   el.addEventListener("click", () => {
      //     const countryCode = el.textContent;
      //     console.log(el.textContent);
      //     // getCountryDataByCode(countryCode);
      //   })
      // );
    } else {
      borderCountriesContainer.innerHTML =
        "<p>This country does not have neighboring countries! ❌</p>";
    }
  };

  // Function to get country data by code
  const getCountryDataByCode = async (code) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const data = await response.json();
      renderCountryDetails(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  // Get country code from URL
  const urlParams = new URLSearchParams(window.location.search);
  const countryCode = urlParams.get("code");

  if (countryCode) {
    await getCountryDataByCode(countryCode);
  } else {
    countryDetailsContainer.innerHTML = "<p>Country code not found.</p>";
  }
});
