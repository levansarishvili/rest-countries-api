"use strict";

const dropDownButton = document.querySelector(".filter-dropdown__btn");
const optionsContainer = document.querySelector(".filter-dropdown__options");

// =============== Filter Dropdown List ===============
dropDownButton.addEventListener("click", () => {
  optionsContainer.classList.toggle("hidden");
});
