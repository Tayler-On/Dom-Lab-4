`use strict`;
let total = 0;
let totalParagraph = document.querySelector(`.total`);

let cola = document.querySelector(`.cola`);
let peanuts = document.querySelector(`.peanuts`);
let chocolate = document.querySelector(`.chocolate`);
let gummies = document.querySelector(`.gummies`);

cola.addEventListener(`click`, () => {
  total += 2;
  totalParagraph.textContent = `$${total}.00`;
});

peanuts.addEventListener(`click`, () => {
  total += 3;
  totalParagraph.textContent = `$${total}.00`;
});

chocolate.addEventListener(`click`, () => {
  total += 4;
  totalParagraph.textContent = `$${total}.00`;
});

gummies.addEventListener(`click`, () => {
  total += 6;
  totalParagraph.textContent = `$${total}.00`;
});

// mitch's solution:
let buttons = document.querySelectorAll(`.button`);
buttons.forEach((snack) => {
  snack.addEventListener("click", () => {
    let amount = snack.getAttribute(`data-cost`);
    total += amount;
    totalParagraph.textContent = `$${total}.00`;
  });
});

// Question 2
// this needs to be shortened and add another loop or forEach... Idk why i wrote it like this lol oops

let pennyContainer = document.querySelector(".penny-container");
let nickelContainer = document.querySelector(".nickel-container");
let dimeContainer = document.querySelector(".dime-container");
let quarterContainer = document.querySelector(".quarter-container");
let coinForm = document.querySelector(`.coin-form`);
let coinType = document.querySelector(`.type-of-coin`);
let coinAmount = document.querySelector(`.coinAmount`);

const display = () => {
  if (coinType.value == `penny`) {
    for (i = coinAmount.value; i > 0; i--) {
      let coin = document.createElement("div");
      coin.classList.add("coin");
      coin.classList.add(`penny`);
      let pennyLabel = document.createElement(`p`);
      pennyLabel.textContent = `Penny`;
      coin.append(pennyLabel);
      pennyContainer.append(coin);
    }
  }
  if (coinType.value == `nickel`) {
    for (i = coinAmount.value; i > 0; i--) {
      let coin = document.createElement("div");
      coin.classList.add(`coin`);
      coin.classList.add(`silver`);
      coin.classList.add(`nickel`);
      let nickelLabel = document.createElement(`p`);
      nickelLabel.textContent = `Nickel`;
      coin.append(nickelLabel);
      nickelContainer.append(coin);
    }
  }
  if (coinType.value == `dime`) {
    for (i = coinAmount.value; i > 0; i--) {
      let coin = document.createElement("div");
      coin.classList.add(`coin`);
      coin.classList.add(`silver`);
      coin.classList.add(`dime`);
      let dimeLabel = document.createElement(`p`);
      dimeLabel.textContent = `Dime`;
      coin.append(dimeLabel);
      dimeContainer.append(coin);
    }
  }
  if (coinType.value == `quarter`) {
    for (i = coinAmount.value; i > 0; i--) {
      let coin = document.createElement("div");
      coin.classList.add(`coin`);
      coin.classList.add(`silver`);
      coin.classList.add(`quarter`);
      let quarterLabel = document.createElement(`p`);
      quarterLabel.textContent = `quarter`;
      coin.append(quarterLabel);
      quarterContainer.append(coin);
    }
  }
};

coinForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  display();
});

pennyContainer.addEventListener(`click`, () => {
  let penny = document.querySelector(`.penny`);
  penny.remove();
});

nickelContainer.addEventListener(`click`, () => {
  let nickel = document.querySelector(`.nickel`);
  nickel.remove();
});

dimeContainer.addEventListener(`click`, () => {
  let nickel = document.querySelector(`.dime`);
  nickel.remove();
});

quarterContainer.addEventListener(`click`, () => {
  let nickel = document.querySelector(`.quarter`);
  nickel.remove();
});

// #3 Question

let lightBulb = document.querySelector(`.light-bulb`);
let on = document.querySelector(`.on`);
let off = document.querySelector(`.off`);
let toggle = document.querySelector(".toggle");
let end = document.querySelector(`.end`);

on.addEventListener(`click`, () => {
  //lightBulb.classList.add(`light`);
  lightBulb.style.backgroundColor = `yellow`;
});

off.addEventListener(`click`, () => {
  //lightBulb.classList.add(`dark`);
  lightBulb.style.backgroundColor = `grey`;
});

toggle.addEventListener(`click`, () => {
  if (lightBulb.style.backgroundColor === `grey`) {
    lightBulb.style.backgroundColor = `yellow`;
  } else {
    lightBulb.style.backgroundColor = `grey`;
  }
});

end.addEventListener("click", () => {
  lightBulb.remove();
  on.disabled = true;
  off.disabled = true;
  toggle.disabled = true;
  end.disabled = true;
});
