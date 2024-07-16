"use strict";

// =============== Color Mode Switcher ===============
const body = document.querySelector("body");
const header = document.querySelector(".header");
const colorModeBtn = document.querySelector(".color-mode-btn");

colorModeBtn.addEventListener("click", () => {
  // body.classList.toggle("dark-mode");
  // header.classList.toggle("dark-mode-header");
});

// =============== Custom Dropdown List ===============
const dropDownButton = document.querySelector(".custom-dropdown__btn");
const optionsContainer = document.querySelector(".options-wrapper");

dropDownButton.addEventListener("click", () => {
  optionsContainer.classList.toggle("hidden");
});
