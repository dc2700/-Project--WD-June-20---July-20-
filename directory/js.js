var nav = document.querySelector("#nav");
var main = document.querySelector('main')
let all = document.querySelector(".All")
let over = document.querySelector('#over')
window.addEventListener("scroll", function(){
    if(window.scrollY > 850){
        nav.classList.add("heightednav");
    }
    if(window.scrollY < 850){
        nav.classList.remove("heightednav");
    }
})


all.addEventListener('mouseover' , function(){
    over.style.display = "flex";
})


main.addEventListener('mouseover' , function(){
over.style.display='none';
})

