"use strict";

const body = document.querySelector("body");
const colorSwitcherBtn = document.querySelector(".color-switcher-btn");

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
