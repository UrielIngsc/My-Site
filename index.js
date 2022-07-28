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