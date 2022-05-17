const icons = [{
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

// const conatinerHTML = document.querySelector("container");
// const boxIcon = document.querySelector("#tpl-box-icon").content;

// function boxIconHTML(print, elm) {
//     let card = boxIcon.cloneNode(true);
//     card.querySelector("i").classList.add(elm.family, elm.prefix + elm.name, elm.color);
//     card.querySelector("span").innerHTML = elm.name;
//     print.append(card);
// }
// //creo uja funzione per stampare la funzione precedente per tutti gli ogetti
// function printIconHTML(print, elm) {
//     elm.forEach(element => boxIconHTML(print, element));
// }
// printIconHTML(conatinerHTML, icon)
const Container = document.querySelector(".container");
//ciclo per la lunghezza del mio ogetto
for (let i = 0; i < icons.length; i++) {
    const element = icons[i]
    const printIcon = `
	<div class="box-icon">
                 <i class="fa-solid fa-${element.name}" style = "color: ${element.color}></i>
                 <span>${element.name}</span>
   </div>
	`
    Container.innerHTML += printIcon;

}