let botaomenu = document.querySelector('.bx-menu')
let menuMobile = document.querySelector('#mobile-menu')


botaomenu.addEventListener("click", showMenu)
function showMenu(){
    if(menuMobile.style.display == "none"){
    menuMobile.style.display = 'flex'
    botaomenu.classList.remove("bx-menu")
    botaomenu.classList.add("bx-x")
}
    else{
        menuMobile.style.display = 'none'
        botaomenu.classList.remove("bx-x")
        botaomenu.classList.add("bx-menu")
    }
}

let width
function getwidth(){
   width = window.innerWidth
    if (width > 768){
        menuMobile.style.display ="none";
        botaomenu.classList.remove("bx-x");
        botaomenu.classList.add("bx-menu");
    }
}
window.addEventListener('resize', getwidth)




