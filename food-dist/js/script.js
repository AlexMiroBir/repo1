'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //TABS:

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');

        });
    }


    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {

            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }

            });



        }
    });

    // Timer

    const deadline = '2021-01-25';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (60 * 60 * 24 * 1000)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
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

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }


    setClock('.timer', deadline);



    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;

        }
    }

    // Modal 

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelectorAll('[data-close]');


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });



    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });


    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

});


class Cart {
    constructor(imgSrc, subTitle, description, price) {
        this.imgSrc = imgSrc;
        this.subTitle = subTitle;
        this.description = description;
        this.price = price;
        this.myBody = this.render();
    }
    render() {
        const myBody = document.createElement('div');
        myBody.className = 'menu__item';

        const img = document.createElement('img');
        img.src = this.imgSrc;
        img.alt = 'cart logo';

        const subTitle = document.createElement('h3');
        subTitle.className = 'menu__item-subtitle';
        subTitle.textContent = this.subTitle;

        const description = document.createElement('div');
        description.className = 'menu__item-descr';
        description.textContent = this.description;

        const divider = document.createElement('div');
        divider.className = 'menu__item-divider';

        const price = document.createElement('div');
        price.className = 'menu__item-price';
            const priceText = document.createElement('div');
            priceText.className = 'menu__item-cost';
            priceText.textContent = 'Цена';

            const priceNumber = document.createElement('div');
            priceNumber.className = 'menu__item-total';
            priceNumber.innerHTML = `<span>${this.price}</span> грн/день`;

            price.append(priceText);
            price.append(priceNumber);

        myBody.append(img);
        myBody.append(subTitle);
        myBody.append(description);
        myBody.append(divider);
        myBody.append(price);

        return myBody;
    }

    addtoPage(parent){
        parent.append(this.myBody);
        
    }


}

const cart1 = new Cart(
    './img/tabs/vegy.jpg',
     'Меню "Фитнес"', 
'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
 229);
 
 cart1.addtoPage(document.querySelector(".menu .container"));

const cart2 = new Cart(
    './img/tabs/elite.jpg',
     'Меню “Премиум”', 
'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
 550);
 
 cart2.addtoPage(document.querySelector(".menu .container"));

const cart3 = new Cart(
    './img/tabs/post.jpg',
     'Меню "Постное"', 
'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
 430);
 
 cart3.addtoPage(document.querySelector(".menu .container"));