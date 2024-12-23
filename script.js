"use strict";
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content has been loaded");
});

const button = document.querySelector(".btn");
const colorBox = document.getElementById("color--box");
button.addEventListener("click", function () {
  const randomNumber1 = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);
  colorBox.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
});
