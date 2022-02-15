window.addEventListener('DOMContentLoaded', () => {
    // Tabs

    const
        tabsParent = document.querySelector('.tabheader__items'),
        tabs = tabsParent.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item') && !target.classList.contains('tabheader__item_active')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })


    // Timer

    const dedLine = '2022-05-07 08:30';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor( (t/(1000*60*60) % 24) ),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(number) {
        if (number >= 0 && number < 10) {
            number = `0${number}`;
        }
        return number;
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                console.log(`My son's birthday`);
            }
        }
    }

    setClock('.timer', dedLine);


    // Modal

    const modalButton = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalCloseButton = document.querySelector('[data-close]');

    function modalToggle() {
        modal.classList.toggle('show');
        document.body.classList.toggle('overflow-hidden');
        clearInterval(modalTimerId);
    }

    modalButton.forEach((button) => {
        button.addEventListener('click', modalToggle);
    })

    modalCloseButton.addEventListener('click', modalToggle);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Modal clicked');
            modalToggle();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            modalToggle('Escape');
        }
    });


    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalToggle();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }


    const modalTimerId = setTimeout(modalToggle, 6000);

    window.addEventListener('scroll', showModalByScroll);

})