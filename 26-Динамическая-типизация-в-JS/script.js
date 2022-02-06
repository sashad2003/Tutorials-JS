'use strict';

// To string

// 1)
console.log(typeof (String(null)));
console.log(typeof (String(4)));

// 2)
console.log(typeof (5 + ''));


const num = 5;

console.log("http://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To number

// 1)
console.log(typeof (Number(4)));

// 2)
console.log(typeof (+'5'));

// 3)
console.log(typeof (parseInt("15px", 10)));

let answ = +prompt("Hello World!", "");

// To boolean

//  0, '', null, undefined, NaN; ------ Всегда возвращает FALSE

// 1)
let switcher = null;

if (switcher) {
    console.log("Switcher Is True");
} else {
    console.log("Switcher Is False");
}

switcher = 1;

if (switcher) {
    console.log("Switcher Is True");
}

// 2)
console.log(typeof (Boolean('4')));

// 3)
console.log(typeof (!!"dsfds"));

