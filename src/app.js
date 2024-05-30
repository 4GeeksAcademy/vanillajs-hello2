* eslint-disable *
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  
  //write your code here
  function generarDominio(pronoun, adj, noun) {
    let nombresDominios = [];
  
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          let dominio = p + a + n + '.com';
          nombresDominios.push(dominio);
        }
      }
    }
    return nombresDominios;
  }
  
  let dominios = generarDominio(pronoun, adj, noun);
  dominios.forEach(dominio => console.log(dominio));
  
  
