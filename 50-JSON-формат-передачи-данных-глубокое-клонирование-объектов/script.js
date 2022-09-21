const person ={
    name: 'Alex',
    age: 41,
    parents: {
        papa: 'Igor',
        mama: 'Galina'
    }
}

console.log(person); // Обычный объект с вложенностью  
console.log(JSON.stringify(person)); // В таком формате принимает сервер
console.log(JSON.parse(JSON.stringify(person)));
// В таком формате получаем с сервера и конвертируем в объект с которым можно уже работать


// Способ клонирования объектов не нарушая начальный экземпляр
const clone = JSON.parse(JSON.stringify(person));

clone.parents.mama = 'Galya';

console.log(person);
console.log(clone);
