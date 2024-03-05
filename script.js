let bulb = document.querySelector(".ri-lightbulb-line");
let btn = document.querySelector("button");
let bdy = document.querySelector("body");
let check = 0

btn.addEventListener("click", function(){
    if(check==0) {
        bulb.style.backgroundColor= "yellow";
        btn.style.backgroundColor= "orangered";
        btn.innerHTML= "OFF";
        check+=1
    }
    else {
        bulb.style.backgroundColor= "white";
        btn.style.backgroundColor= "white";
        btn.innerHTML= "ON";
        check-=1
    }
})

