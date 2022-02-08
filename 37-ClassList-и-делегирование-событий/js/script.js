const btns = document.querySelectorAll('button');

console.log(`classList.length is "${btns[0].classList.length}"`);
console.log(`classList.item(1) is "${btns[0].classList.item(1)}"`);
console.log(btns[0].classList.add('red'));
console.log(btns[0].classList.remove('blue'));