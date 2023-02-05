

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


console.log("1.Вёрстка соответствует макету. Ширина экрана 768px +24\n2.Вёрстка соответствует макету. Ширина экрана 380px +24\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +7\n4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px) +18.\nBcего 73 балла.");


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