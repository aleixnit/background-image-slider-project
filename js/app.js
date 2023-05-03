const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

// buena suerte
// necesitamos una vatiable de estado que nos indique la foto que se está mostrando.

let indexPhoto = 1;
let btnRight = document.querySelector('.btn-right');
let btnLeft = document.querySelector('.btn-left');
//actualizadme el nodo adecuado del html para establecer su estilo en linea background image con la url de la foto que pertecene al index j

function updateImage(number) {
document.querySelector('.img-container').style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
}
// 1. recuperar el nodo del botón derecho y asociar el evento click.
// 2. Actualizar la variable de estado sumandole 1.
// 3. Volvemos a actualizar el style.backgroundImage.
// 4. Para el botón izquierdo hacer lo mismo.

btnRight.addEventListener("click", () => { 
  console.log("Has hecho click");
  indexPhoto++;
  if (indexPhoto >= pictures.length) {
    indexPhoto = 0; // Si alcanza el final del arreglo, volvemos al principio
  }
  updateImage(indexPhoto);
});

btnLeft.addEventListener("click", () => { 
  console.log("Has hecho click");
  indexPhoto--;
  if (indexPhoto < 0) {
    indexPhoto = pictures.length - 1; // Si va más allá del principio del arreglo, volvemos al final
  }
  updateImage(indexPhoto);
});





// function updatePhoto(number) {
// const arrowElement = document.querySelector(".img-container");
//   arrowElement.innerHTML = indexPhoto;

//   if (indexPhoto = 0) {
//     arrowElement.style.backgroundImage = url(`../img/${pictures[indexPhoto]}.jpg`);
//   } else if (indexPhoto = 1) {
//     arrowElement.style.backgroundImage = url(`../img/${pictures[indexPhoto]}.jpg`);
//   } else (indexPhoto = 2) {
//     arrowElement.style.backgroundImage = url(`../img/${pictures[indexPhoto]}.jpg`);
//   }
// }
