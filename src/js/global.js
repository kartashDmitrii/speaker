import hideList from "./components/hideList";
import popupFunc from "./components/popupFunc";

if (document.querySelector('header .burger') && window.screen.width <= 900){
    document.querySelector('header .burger').addEventListener('click', () => {
        document.querySelector('header .mobile-menu').classList.toggle('active')
    })
}

if (document.querySelector('[data-popup*="-popup"]')){
    document.querySelectorAll('[data-popup*="-popup"]').forEach( elem => {
        new popupFunc(elem, document.querySelector(`.popup.${elem.dataset.popup}`))
    })
}
if (document.querySelector('section.service-seo')){
    document.querySelectorAll('section.service-seo').forEach( elem => {
        new hideList(elem, {
            minHeight: 157
        })
    })
}