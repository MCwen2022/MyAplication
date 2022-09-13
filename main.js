const number = document.querySelector(".number");
const checkbox = document.querySelector(".checkbox");
const btn = document.querySelector("button");
const wynik = document.querySelector(".wynik");

btn.addEventListener("click", function(evt){
    evt.preventDefault();

    if(checkbox.checked){
        if(number.value <= 50 ){
            wynik.innerHTML = (number.value * 2) - number.value * 0.2;
        }
        else{
            wynik.innerHTML = (number.value * 1) - number.value * 0.2;
        }
        
    }
    else{   
        if(number.value <=50 ){
            wynik.innerHTML = (number.value * 2);
        }else{
            wynik.innerHTML = (number.value * 1);
        }  
    }
})