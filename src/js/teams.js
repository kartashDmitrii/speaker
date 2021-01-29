if (document.querySelector('section.teams') && window.screen.width > 767){
    document.querySelectorAll('section.teams .user').forEach( (elem, i) => {
        let nextElem;
        let flag = false;
        if (i % 2){
            nextElem = document.querySelectorAll('section.teams .user')[i - (i % 2)]
            flag = true
        } else {
            nextElem =document.querySelectorAll('section.teams .user')[i + 1]
        }
        if (typeof nextElem === 'undefined'){
            elem.querySelector('.preview').classList.add('bordered')
        }
        elem.querySelector('.btn').addEventListener('click', ()=>{
            elem.classList.toggle('active');
            if (elem.classList.contains('active')){
                document.querySelectorAll('section.teams .user')[i - (i % 2)].classList.add('hover');
                if (flag) document.querySelectorAll('section.teams .user')[i - (i % 2)].classList.add('right');
                setTimeout(()=>{
                    if (elem.classList.contains('active')) {
                        elem.querySelector('.content').style.zIndex = '4';
                        elem.querySelector('.preview').style.zIndex = '5';
                    }
                }, 300);
                if (typeof nextElem !== 'undefined') nextElem.style.zIndex = '-1';
            } else {
                document.querySelectorAll('section.teams .user')[i - (i % 2)].classList.remove('hover');
                if (flag) document.querySelectorAll('section.teams .user')[i - (i % 2)].classList.remove('right');
                elem.querySelector('.content').style.removeProperty('z-index');
                elem.querySelector('.preview').style.removeProperty('z-index');
                setTimeout(()=>{
                    if (!elem.classList.contains('active')) {
                        if (typeof nextElem !== 'undefined') nextElem.style.removeProperty('z-index');
                    }
                }, 300)
            }
        })
    })
}
if (document.querySelector('section.teams') && window.screen.width <= 767){
    document.querySelectorAll('section.teams .user').forEach( (elem, i) => {
        elem.querySelector('.btn').addEventListener('click', ()=> {
            elem.classList.add('active');
            elem.querySelector('.content').style.height = `${elem.querySelector('.content').scrollHeight + 50}px`;
        });
        elem.querySelector('.back').addEventListener('click', ()=> {
            elem.classList.remove('active');
            elem.querySelector('.content').style.height = `0px`;
        });
    })
}