"use strict";

// =============== Color Mode Switcher ===============
const body = document.querySelector("body");
const colorModeBtn = document.querySelector(".color-mode-btn");

colorModeBtn.addEventListener("click", function () {
  body.style.backgroundColor = "hsl(207, 26%, 17%)";
});

// =============== Custom Dropdown List ===============
const dropDownButton = document.querySelector(".custom-dropdown__btn");
const optionsContainer = document.querySelector(".options-wrapper");

dropDownButton.addEventListener("click", function () {
  optionsContainer.classList.toggle("hidden");
});
