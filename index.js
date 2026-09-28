 let num1 = 0
 let num2 = 0
let counter1 = document.getElementById("counter-el")
let counter2 = document.getElementById("counter2-el")

counter1.textContent = num1
counter2.textContent = num2

function one(){
   counter1.textContent = (num1+= 1)
    
}
function two(){
    counter1.textContent = (num1+= 2)
}
function three(){
    counter1.textContent = (num1+= 3)
}
function one1(){
    counter2.textContent = (num2 +=1)
}
function two1(){
    counter2.textContent = (num2+= 2)
}
function three1(){
    counter2.textContent = (num2+= 3)
}

function reset(){
    counter1.textContent = 0
    counter2.textContent = 0
}