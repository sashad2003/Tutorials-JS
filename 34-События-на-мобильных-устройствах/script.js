// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('touch started');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
        console.log(e.targetTouches[1].pageX);
        console.log(e.targetTouches[2].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('touch end');
    // });
});

// touches
// targetTouches
// changedTouches