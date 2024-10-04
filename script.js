let botaomenu = document.querySelector('.bx-menu')
let menuMobile = document.querySelector('#mobile-menu')
let buttonTheme = document.querySelector(".bxs-moon")
let body = document.querySelector("body")


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



const changeTheme = () => {
    if(body.classList.contains("isso")){
        body.classList.remove("isso")
        body.classList.add('dark')
        buttonTheme.classList.remove("bxs-moon")
        buttonTheme.classList.add("bx-sun")
    }else{
        body.classList.remove('dark')
        body.classList.add("isso")
        buttonTheme.classList.remove("bx-sun")
        buttonTheme.classList.add("bxs-moon")
    }
}

buttonTheme.addEventListener("click", changeTheme)
