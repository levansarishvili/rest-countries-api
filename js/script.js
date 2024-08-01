"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const colorSwitcherBtn = document.querySelector(".color-switcher-btn");

  // =============== Color Mode Switcher ===============

  let darkmode = localStorage.getItem("darkmode");
  console.log(darkmode);

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
