"use strict";

// Make AJAX Call (old way)
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/usa");

request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(request.responseText);
  console.log(data);
});

// =============== Color Mode Switcher ===============
// const body = document.querySelector("body");

// const header = document.querySelector(".header");
// const dropDownIcon = document.querySelector(".custom-dropdown__icon");
// const searchInput = document.querySelector(".search-input");

// const colorModeBtn = document.querySelector(".color-mode-btn");
// const colorModeDesc = document.querySelector(".color-mode__desc");
// const colorModeIcon = document.querySelector(".color-mode__icon");

// // Details Page
// const backButtonIcon = document.querySelector(".back-btn__icon");

// colorModeBtn.addEventListener("click", () => {
//   const themeAttr = body.getAttribute("data-theme");

//   if (themeAttr === "light") {
//     document.documentElement.style.setProperty(
//       "--main-bg-color",
//       "hsl(207, 26%, 17%)"
//     );
//     document.documentElement.style.setProperty(
//       "--main-el-color",
//       "hsl(209, 23%, 22%)"
//     );
//     document.documentElement.style.setProperty(
//       "--main-text-color",
//       "hsl(0, 0%, 100%)"
//     );
//     document.documentElement.style.setProperty(
//       "--main-input-color",
//       "hsl(0, 0%, 100%)"
//     );

//     // Change expand-more icon's src
//     dropDownIcon?.setAttribute("src", "./icons/expand-more-light.svg");

//     // Change search input background image's url
//     if (searchInput)
//       searchInput.style.backgroundImage = "url(./icons/search-light.svg)";

//     // Change color mode description
//     colorModeDesc.textContent = "Light Mode";

//     // Change color mode icon's src
//     colorModeIcon.setAttribute("src", "./icons/moon-light.svg");

//     // Change button icon's src
//     if (backButtonIcon)
//       backButtonIcon.setAttribute("src", "./icons/left-arrow-light.svg");

//     body.setAttribute("data-theme", "dark");

//     // Save color theme in local storage
//     localStorage.setItem("theme", "dark");
//   } else if (themeAttr === "dark") {
//     document.documentElement.style.setProperty(
//       "--main-bg-color",
//       " hsl(0, 0%, 98%)"
//     );
//     document.documentElement.style.setProperty(
//       "--main-el-color",
//       "hsl(0, 0%, 100%)"
//     );
//     document.documentElement.style.setProperty(
//       "--main-text-color",
//       "hsl(200, 15%, 8%)"
//     );
//     document.documentElement.style.setProperty(
//       "--main-input-color",
//       "hsl(0, 0%, 52%)"
//     );

//     // Change back expand-more icon's src
//     dropDownIcon?.setAttribute("src", "./icons/expand-more.svg");

//     // Change back search input background image's url
//     if (searchInput)
//       searchInput.style.backgroundImage = "url(./icons/search.svg)";

//     // Change color mode description
//     colorModeDesc.textContent = "Dark Mode";

//     // Change back color mode icon's src
//     colorModeIcon.setAttribute("src", "./icons/moon.svg");

//     // Change back button icon's src
//     if (backButtonIcon)
//       backButtonIcon.setAttribute("src", "./icons/left-arrow.svg");

//     body.setAttribute("data-theme", "light");

//     // Save color theme in local storage
//     localStorage.setItem("theme", "light");
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const savedTheme = localStorage.getItem("theme");

//   console.log(savedTheme);
// });

// =============== Custom Dropdown List ===============
const dropDownButton = document.querySelector(".filter-dropdown__btn");
const optionsContainer = document.querySelector(".filter-dropdown__options");

dropDownButton?.addEventListener("click", () => {
  optionsContainer.classList.toggle("hidden");
});
