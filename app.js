"use strict";
const burger = document.querySelector(".burger");
const burgerimg = document.querySelector(".burger-img");
const navMobile = document.querySelector(".navigation-items");
const features = document.querySelector(".features");
const featuresMenu = document.querySelector(".features-dd");
const arrowf = document.querySelector(".arrowf");
const company = document.querySelector(".company");
const companyMenu = document.querySelector(".company-dd");
const arrowc = document.querySelector(".arrowc");
const over = document.querySelector(".dark");

const showf = () => {
  // featuresMenu.classList.toggle("toggle");
  // featuresMenu.classList.toggle("active");
  if (featuresMenu.style.display === "block") {
    featuresMenu.style.display = "none";
    arrowf.src = "images/icon-arrow-down.svg";
  } else {
    featuresMenu.style.display = "block";
    arrowf.src = "images/icon-arrow-up.svg";
  }
};
const showc = () => {
  if (companyMenu.style.display === "block") {
    companyMenu.style.display = "none";
    arrowc.src = "images/icon-arrow-down.svg";
  } else {
    companyMenu.style.display = "block";
    arrowc.src = "images/icon-arrow-up.svg";
  }
};
// features.addEventListener("mouseover", showf);
features.addEventListener("click", showf);
// company.addEventListener("mouseover", showc);
company.addEventListener("click", showc);
burger.addEventListener("click", () => {
  navMobile.classList.toggle("mobile-active");
  over.classList.toggle("overlay");

  if (burgerimg.src.match("images/icon-menu.svg")) {
    burgerimg.src = "images/icon-close-menu.svg";
  } else {
    burgerimg.src = "images/icon-menu.svg";
  }
});
