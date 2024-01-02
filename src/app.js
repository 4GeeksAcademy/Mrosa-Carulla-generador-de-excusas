/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let who = ["El perro", "Mi abuelo", "Tu gato", "Mi cartera"];
  let action = ["muerde", "corre", "salta", "rompe"];
  let what = ["el coche", "las llaves", "el collar"];
  let when = [
    "despues de comer",
    "cuando corre",
    "despues de ir al baño",
    "durante la comida",
    "mientras compra"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
