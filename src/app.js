/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let opt1 = ["web", "cool", "poke", "pika"];
  let opt2 = ["wii", "free", "2", "dev"];
  let extencions = [".com", ".net", ".org"];
  let textoH1 = document.querySelector("#domaingen");

  let aux = "";
  for (let i = 0; i < opt1.length; i++) {
    for (let j = 0; j < extencions.length; j++) {
      console.log(opt1[i] + " " + extencions[j]);
      aux +=
        "<p>" +
        opt2[i] +
        opt1[i] +
        "" +
        extencions[j] +
        "<br><br>" +
        opt1[i] +
        opt2[i] +
        "" +
        extencions[j] +
        "</p> ";
    }
  }
  textoH1.innerHTML = aux;
};
