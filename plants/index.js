

// Burger 



(function () {
    const burgerItem = document.querySelector('.burger');
 /*   console.log(burgerItem);  */
    const menu = document.querySelector('.header__menu');
    const menuCloseItem = document.querySelector('.header__menu-close');
    const menuLinks = document.querySelectorAll('.menu__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
    });
    if(window.innerWidth < 580) {
       
       for (let i = 0; i < menuLinks.length; i += 1) {
           menuLinks[i].addEventListener('click', () => {
               menu.classList.remove('header__menu_active');
        });
       }
    }
}());



// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());




/***Accordion     */

const accordionTitles = document.querySelectorAll(".accordionTitle");
accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        if (accordionTitle.classList.contains("is-open")) {
            accordionTitle.classList.remove("is-open");
        } else {
            const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
           
            accordionTitlesWithIsOpen.forEach((accordionTitlesWithIsOpen) => {
            accordionTitlesWithIsOpen.classList.remove("is-open");
        });
       accordionTitle.classList.add("is-open");
    }
    });
});

/*  Service  images with blur*/

function search() {
    const buttons = document.querySelectorAll('button');
    const imgs = document.querySelectorAll('.item-blog')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFilter = !item.classList.contains(category)
            if (isItemFilter) {
                item.classList.add('blur')
            } else {
                item.classList.remove('blur')
            }
        })
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
          const currentCategory = button.dataset.filter
          filter(currentCategory, imgs)
        console.log()
      })
    })
}

search()

/*  --------*/


/* Contact */
function show (a) {
    document.querySelector('.text02').value = a;
}
let contactBtn = document.querySelector('.contacts__btn');
contactBtn.onclick = function() {
    contactBtn.classList.toggle('active');
}

/* dropdown */


let menuButtons = document.querySelectorAll('.menu__button');
let menuButtonsArray = Array.from(menuButtons);

menuButtonsArray.forEach(button => {
    button.addEventListener('click', () => {
        closeAnotherButtons(button); 
        button.classList.toggle('active');
    } );
} );   

function closeAnotherButtons(activeButton) { 

    menuButtonsArray.forEach(button => {

        if (button != activeButton) {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        }

    });  
} 


console.log("1. Accordion в секции prices реализация 3 - х выпадающих списков об услугах и ценах + 50\n2. При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +30\n3. В разделе contacts реализован select с выбором городов +25\ Всего 105 ")