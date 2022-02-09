const btns = document.querySelectorAll('button');
const buttonsWrapper = document.querySelector('.btn-block');

// console.log(`classList.length is "${btns[0].classList.length}"`);
// console.log(`classList.item(1) is "${btns[0].classList.item(1)}"`);
// console.log(btns[0].classList.add('red','sdfsff'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));


// if (btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click', (e) => {

    btns[1].classList.toggle('red');

    // Тоже самое но более подробно можно настроить проверки.

    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // }else{
    //     btns[1].classList.remove('red');
    // }

})

// Делегирование - Нажатие на элемент через его родителя.
buttonsWrapper.addEventListener('click', (e) => {
    // console.dir(e.target); - DIR позволяет видеть элемент как объект
    if(e.target && e.target.tagName == 'BUTTON'){ 
        // e.target в условии помогает избегать лишних тегов на странице типа <BR> и тд.
        console.log('Нажал на кнопку');
    }
})


// Кнопка создана после распределений обязанностей но из за делегирования принимает весь функционал 
const newButton = document.createElement('button');
newButton.classList.add('red');
buttonsWrapper.append(newButton);