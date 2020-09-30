import audios from '../assets/mp3/*.mp3';
import covers from '../assets/img/*-cover.png';
import innerdisks from '../assets/img/*-disk.png';

import Player from './Player';

// Cosas útiles

const vinilNames = Object.keys(audios);
const coversPath = Object.values(covers);
const innerDiskPath = Object.values(innerdisks);
const diskColor = ['#be0577', '#55a159', '#fdc407'];

// Function create newElement and append Styles

function newElement(classStyles) {
  let div = document.createElement('div');

  if (classStyles instanceof Array) {
    for (let i in classStyles) {
      div.className += ' ' + classStyles[i];
    }
  } else {
    div.className = classStyles;
  }
  return div;
}

// Generate DOM

let contador = 0;

for (let i of vinilNames) {
  document.body.innerHTML += `<div class="item ${i} flex">`;
  let vinil = document.querySelector(`.${i}`);
  let child = vinil.appendChild(newElement(['cover']));
  child.style.backgroundImage = `url(${coversPath[contador]})`;
  child = vinil.appendChild(newElement(['vinyl', 'flex']));
  child = child.appendChild(newElement(['label', 'flex']));
  child.appendChild(newElement('outerLine'));
  child.appendChild(newElement('innerLine'));

  child = child.appendChild(newElement('hole'));
  child.style.backgroundImage = `url(${innerDiskPath[contador]})`;
  child.style.boxShadow = `0px 0px 25px ${diskColor[contador]}`;
  document.body.innerHTML += `<audio id="${i}-audio">`;
  document.body.innerHTML += `<br><br>`;

  contador++;
}

let player = new Player(audios);
