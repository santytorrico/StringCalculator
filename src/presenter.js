import addstrings from "./addStrings.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;
  div.innerHTML = "<p>" + addstrings(firstNumber) + "</p>";
});
