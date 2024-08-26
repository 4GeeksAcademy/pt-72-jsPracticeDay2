/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(
    ".container-fluid"
  ).innerHTML = createAllBurgersMenus();
  createBurger();
};

// let example = ["stuff", "hot dogs", "buildings", "purple"];
// let randomExample = example[Math.floor(Math.random() * example.length)];
// console.log(randomExample)
const createAllBurgersMenus = () => {
  let openSelect = "<select>";
  let closingSelect = "</select><hr>";

  let bread = [
    "Potato Roll",
    "Pretzel Bun",
    "Regular Bun",
    "Texas Toast",
    "Sourdough"
  ];
  let meat = ["Beef", "Turkey", "Chicken", "Beyond Burger", "Pork", "Fish"];
  let toppingOne = ["Mayo", "Mustard", "Ketchup", "BBQ", "Ranch"];
  let toppingTwo = ["Cheese", "Pickles", "Onion", "Tomato", "Lettuce"];

  let orderOptions = "<h5>You can choose from these options:<h5><hr>";
  orderOptions += openSelect;
  for (let i in bread) {
    orderOptions += "<option>" + bread[i] + "</option>";
  }
  orderOptions += closingSelect + openSelect;

  for (let x in toppingTwo) {
    orderOptions += "<option>" + toppingTwo[x] + "</option>";
  }
  orderOptions += closingSelect + openSelect;
  for (let y in toppingOne) {
    orderOptions += "<option>" + toppingOne[y] + "</option>";
  }
  orderOptions += closingSelect + openSelect;
  for (let z in meat) {
    orderOptions += "<option>" + meat[z] + "</option>";
  }
  orderOptions += closingSelect;
  return orderOptions;
};
const createBurger = () => {
  const element = document.getElementsByTagName("option").innerHTML;
  console.log(element);
};
