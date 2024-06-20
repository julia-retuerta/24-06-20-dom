// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/* TEORÍA DOM */

//const titleElement = document.getElementById('title');

//console.dir(titleElement);

/* Para acceder a propiedades se utiliza el . porque son objetos */
//console.log(titleElement.ownerDocument.URL);

/* Para imprimir el header */
//console.dir(titleElement.parentElement);

/* Para imprimir el p */
//console.dir(titleElement.nextElementSibling);

/* Para imprimir propiedades se utiliza console.log, para imprimir elementos del html: console.dir */

//
//
//

/* EJERCICIOS DOM */

/* - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con.... */

const startPointElement = document.getElementById('start-point');

console.dir(startPointElement);

console.log(
  `Soy un ${startPointElement.tagName} con el id ${startPointElement.id} y la clase ${startPointElement.className}. Mi padre es un ${startPointElement.parentElement.tagName} con la clase ${startPointElement.parentElement.className}, uno de mis hermanos es un ${startPointElement.previousElementSibling.tagName} con la clase ${startPointElement.previousElementSibling.className} y mi otro hermano es un ${startPointElement.parentElement.children[0].tagName} con la clase ${startPointElement.parentElement.children[0].className}`
);

//
//
//

/* - Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido. */

const list1Element = document.getElementById('first-list');
const list2Element = document.getElementById('second-list');

console.dir(list1Element);
console.dir(list2Element);

const contentList1Element = list1Element.children[0].textContent;
const contentList2Element = list2Element.children[0].textContent;

console.dir(contentList1Element);
console.dir(contentList2Element);

list1Element.children[0].textContent = contentList2Element;
list2Element.children[0].textContent = contentList1Element;

console.dir(list1Element.children[0].textContent);
console.dir(list2Element.children[0].textContent);

//
//
//

/* - Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
  - Hay 1 Header
  - Hay 1 h1
  - Hay 2 nav
    ...... */

const headerElement = document.querySelectorAll('header');
const numberOfHeader = headerElement.length;
console.log(`Hay ${numberOfHeader} header`);

const h1Element = document.querySelectorAll('h1');
const numberOfH1 = h1Element.length;
console.log(`Hay ${numberOfH1} h1`);

const navElement = document.querySelectorAll('nav');
const numberOfNav = navElement.length;
console.log(`Hay ${numberOfNav} nav`);

const ulElement = document.querySelectorAll('ul');
const numberOfUl = ulElement.length;
console.log(`Hay ${numberOfUl} ul`);

const liElement = document.querySelectorAll('li');
const numberOfLi = liElement.length;
console.log(`Hay ${numberOfLi} li`);

const aElement = document.querySelectorAll('a');
const numberOfA = aElement.length;
console.log(`Hay ${numberOfA} a`);

const sectionElement = document.querySelectorAll('section');
const numberOfSection = sectionElement.length;
console.log(`Hay ${numberOfSection} section`);

const articleElement = document.querySelectorAll('article');
const numberOfArticle = articleElement.length;
console.log(`Hay ${numberOfArticle} article`);

const h2Element = document.querySelectorAll('h2');
const numberOfH2 = h2Element.length;
console.log(`Hay ${numberOfH2} h2`);

const pElement = document.querySelectorAll('p');
const numberOfP = pElement.length;
console.log(`Hay ${numberOfP} p`);

const imgElement = document.querySelectorAll('img');
const numberOfImg = imgElement.length;
console.log(`Hay ${numberOfImg} img`);

const spanElement = document.querySelectorAll('span');
const numberOfSpan = spanElement.length;
console.log(`Hay ${numberOfSpan} span`);

const footerElement = document.querySelectorAll('footer');
const numberOfFooter = footerElement.length;
console.log(`Hay ${numberOfFooter} footer`);
