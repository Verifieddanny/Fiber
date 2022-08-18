const man = document.querySelector(".miniButtom");
const burger = document.querySelector(".hamBurger");
const naving = document.querySelector(".navItem");
const body = document.querySelector("body");
const mode = document.querySelector(".bright");
const second = document.querySelector(".secondBox");
const write = document.querySelector(".writeUp");
const chek = document.querySelector(".check1");
const chek2 = document.querySelector(".check2");

man.addEventListener("mouseenter", function () {
  man.classList.add("active");
});
man.addEventListener("mouseleave", function () {
  man.classList.remove("active");
});

burger.addEventListener("click", function () {
  burger.classList.toggle("change");
  naving.classList.toggle("cleek");
});
mode.addEventListener("click", function () {
  body.classList.toggle("add");
  second.classList.toggle("add2");
  mode.classList.toggle("dark");
  write.classList.toggle("up");
  chek.classList.toggle("chep");
  chek2.classList.toggle("cheep");
});
