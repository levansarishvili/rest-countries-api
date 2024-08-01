"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const colorSwitcherBtn = document.querySelector(".color-switcher-btn");

  // =============== Color Mode Switcher ===============
  colorSwitcherBtn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
  });

  // =============== Get Country Data from API ===============
  // Make AJAX Call (old way)
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/name/usa");

  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
  });
});
