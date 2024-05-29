/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  //write your code here
  function generarDominio() {
    let dominio =
      pronoun[Math.floor(Math.random() * pronoun.length)] +
      adj[Math.floor(Math.random() * adj.length)] +
      noun[Math.floor(Math.random() * noun.length)] +
      ".com";
    return dominio;
  }
  document.getElementById("dominio").innerHTML = generarDominio();
};
