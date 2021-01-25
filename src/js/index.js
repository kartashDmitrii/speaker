/*          RATING STARS        */

import NumberTimer from "./components/NumberTimer";

if (document.querySelector('section.top-block')){
    let stars = document.querySelector('section.top-block .google .stars');
    let rating = parseFloat(stars.dataset.rating);
    stars.style.backgroundImage = window.getComputedStyle(stars).getPropertyValue('background-image') +
        `, linear-gradient(90deg, #36A38F ${rating / 5 * 100}%, #fff ${rating / 5 * 100}%)`
}

/*          RATING STARS        */

/*          FEATURES NUMBER        */

if (document.querySelector('section.why-we .right-side')){
    function scrollEvent(e){
        if(pageYOffset > (document.querySelector('section.why-we').offsetTop - window.screen.height)){
            document.querySelectorAll('section.why-we .right-side .elem').forEach( elem => {
                new NumberTimer({
                    elem: elem.querySelector('.num span'),
                    delay: 4000,
                    type: 'ease-out'
                })
            });
            window.removeEventListener('scroll', scrollEvent)
        }
    }
    window.addEventListener('scroll', scrollEvent)

}

/*          FEATURES NUMBER        */

/*          OUR TEAM SLIDER         */

if (document.querySelector('section.our-team')){
    let swiper = new Swiper('section.our-team .swiper-container', {
        navigation: {
            nextEl: 'section.our-team .swiper-container .arrow.next',
            prevEl: 'section.our-team .swiper-container .arrow.prev',
        },
    })
}

/*          OUR TEAM SLIDER         */