function writeText(){
    let ocupation = ".Programador .Diseñador Web";

    let writing = str => {
        
        let arrFromStr = str.split('');
        let i = 0;
        let printStr = setInterval(function(){
            document.querySelector("#title-dinamic").innerHTML += arrFromStr[i];
            i++;
            if(i === arrFromStr.length){
                clearInterval(printStr);
            }
        },100);   
    }
    writing(ocupation);
    setTimeout(function(){
        let icon = document.querySelector(".button-slide");
        icon.innerHTML = "<i class='fa-solid fa-angles-down fa-3x '></i>";
    },2800);

    if($(window).width() < 768){
        let icons = document.querySelectorAll("#custom-icon");
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove("fa-3x");
            icons[i].classList.add("fa-2x");    
        }
    }
    
}
const navMenu = document.querySelector(".nav-menu");
document.querySelector(".nav-toggle").addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")){
        
        let navItems = document.querySelectorAll(".nav-menu-items");

        for (let i = 0; i < navItems.length; i++) {
            const element = navItems[i].addEventListener("click", ()=>{
                navMenu.classList.remove("nav-menu_visible");
            })
        }
    }
})

writeText();