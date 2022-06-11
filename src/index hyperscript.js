/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import h  from 'hyperscript'
import {registerImage} from './lazy'
console.log('Happy hacking :)')

const minimun = 1
const maximun = 122

const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun

const createImageNode = () => {

/*    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src =  `https://randomfox.ca/images/${random()}.jpg`;
*/
    const imagen = h("img.mx-auto",{
      width: "320",
      "data-src": `https://randomfox.ca/images/${random()}.jpg`,
    });

    //const container = document.createElement("div");
    //container.className = "p-4";
    const container = h('div.p-4', imagen);

//    container.appendChild(imagen);

    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');

const addButton = document.querySelector("button");
const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
}

addButton.addEventListener("click", addImage)