'use strict';

// 1)Обычная функция: this = window, но если use strict - undefined

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(5, 4);



// 2)Контекст у методов объекта - сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this)
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();



// 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);



// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// Ручное присвоение контекста
// call and apply работают одинаково пока в функцию не передаются дополнительные параметры



// 4) Ручная привязка this: call, apply и bind

// function count(num) {
//     return this * num;
// }

// В переменную double мы помещаем новую функцию
// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));

// 2 передается в this а num передается в double

const button1 = document.querySelector('button');

// Обычная функция позволяет увидеть this но стрелочная выдаст ошибку
// Обычная функция
button1.addEventListener('click', function () {
    console.log(this);
});

// Стрелочная вместо this позволяет обратиться к event.target
button1.addEventListener('click', (e) => {
    console.log(e.target);
})

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();



// Можно написать двумя способами

const sumFunc = (a) => {
    return a * 2;
}

// короче
const sumFunc1 = a => a * 2;

console.log(sumFunc(5));
console.log(sumFunc1(10));