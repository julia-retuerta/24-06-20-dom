// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//const titleElement = document.getElementById('title');

//console.dir(titleElement);

/* Para acceder a propiedades se utiliza el . porque son objetos */
//console.log(titleElement.ownerDocument.URL);

/* Para imprimir el header */
//console.dir(titleElement.parentElement);

/* Para imprimir el p */
//console.dir(titleElement.nextElementSibling);

/* Para imprimir propiedades se utiliza console.log, para imprimir elementos del html: console.dir */

/* EJERCICIOS */

/* - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con.... */

const startPointElement = document.getElementById('start-point');

console.dir(startPointElement);

console.log(
  `Soy un ${startPointElement.tagName} con el id ${startPointElement.id} y la clase ${startPointElement.classList}. Mi padre es un ${startPointElement.parentElement.tagName} con la clase ${startPointElement.parentElement.classList}, uno de mis hermanos es un ${startPointElement.previousElementSibling.tagName} con la clase ${startPointElement.previousElementSibling.classList} y mi otro hermano es un ${startPointElement.parentElement.children[0].tagName} con la clase ${startPointElement.parentElement.children[0].classList}`
);

/* - Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido. */

const list1Element = document.getElementById('first-list');
console.dir(list1Element);

const list2Element = document.getElementById('second-list');
console.dir(list2Element);

const contentList1Element = document.getElementById('second-list');

const contentList2Element = document.getElementById('first-list');

console.dir(contentList1Element.textContent);
console.dir(contentList2Element.textContent);
