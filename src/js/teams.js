if (document.querySelector('section.teams')){
    document.querySelectorAll('section.teams .user').forEach( (elem, i) => {
        elem.querySelector('.btn').addEventListener('click', ()=>{
            elem.classList.toggle('active');
            if (i % 2){
                console.log('true')
            } else {
                console.log('false')
            }
            console.log(document.querySelectorAll('section.teams .user')[i - (i % 2)])
            if (elem.classList.contains('active')){
                elem.querySelector('.content').style.zIndex = '3'
            } else {
                setTimeout(()=>{
                    elem.querySelector('.content').style.zIndex = '-1'
                }, 300)
            }
        })
    })
}