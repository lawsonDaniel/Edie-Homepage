const hambuger = document.querySelector('.hambuger')
const menu = document.querySelector('.nav-menu')
const link = document.querySelectorAll('.nav-link')
const home =document.querySelector('.home-a')

hambuger.addEventListener('click', ()=>{
    hambuger.classList.toggle('active')
    menu.classList.toggle('active')
    home.classList.toggle('active')

})


for (let index = 1; index < link.length; index++) {
    link[index].addEventListener('click',()=>{
        hambuger.classList.toggle('active')
        menu.classList.toggle('active')
        home.classList.toggle('active')
    })
}