let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");
let bdy = document.querySelector("body");
let check = 0

btn.addEventListener("click", function(){
    if(check==0) {
        bulb.style.backgroundColor= "yellow";
        btn.style.backgroundColor= "blue";
        btn.innerHTML= "OFF";
        check+=1
    }
    else {
        bulb.style.backgroundColor= "transparent";
        btn.style.backgroundColor= "white";
        btn.innerHTML= "ON";
        check-=1
    }
})

