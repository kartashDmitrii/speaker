if (document.querySelector('section.contacts-page')){
    document.querySelectorAll('section.contacts-page .info .block').forEach( (elem, i) =>{
        if(elem.querySelector('.wrapper').classList.contains('active')){
            elem.querySelector('.wrapper').style.height = `${elem.querySelector('.wrapper').scrollHeight}px`;
        }
        elem.querySelector('.title').addEventListener('click', (e) => {
            e.preventDefault();
            let blockHeight = parseInt(window.getComputedStyle(elem.querySelector('.wrapper')).getPropertyValue('height'));
            if (blockHeight === 0){
                document.querySelectorAll('section.contacts-page .info .block').forEach( block => {
                    block.classList.remove('active');
                    block.querySelector('.title').classList.remove('active');
                    block.querySelector('.wrapper').classList.remove('active');
                    block.querySelector('.wrapper').style.height = `0px`;
                });
                elem.querySelector('.wrapper').style.height = `${elem.querySelector('.wrapper').scrollHeight}px`;
                elem.classList.add('active');
                elem.querySelector('.title').classList.add('active');
                elem.querySelector('.wrapper').classList.add('active')
                document.querySelectorAll('section.contacts-page .map').forEach( elem => {
                    elem.classList.remove('active')
                });
                document.querySelectorAll('section.contacts-page .map')[i].classList.add('active')
            }
        })
    });
    
    
    
}