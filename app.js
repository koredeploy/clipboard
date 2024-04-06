console.log("Hello World");
let buttons = document.querySelectorAll("button")
let h3 = document.querySelectorAll("h3")

let number = 0;
let number2 = 0;

console.log(buttons);
console.log(h3);
buttons[0].addEventListener("click", ()=>{
    // number++
    number = number + 1
    h3[0].textContent = number
})

buttons[1].addEventListener("click", ()=>{
    number = number + 2
    h3[0].textContent = number
})

buttons[2].addEventListener("click", ()=>{
    number = number + 3
    h3[0].textContent = number
})

buttons[3].addEventListener("click", ()=>{
    number2++
    h3[1].textContent = number2
})

buttons[4].addEventListener("click", ()=>{
    number2 += 2
    h3[1].textContent = number2
})

buttons[5].addEventListener("click", ()=>{
    number2 += 3
    h3[1].textContent = number2
})

buttons[6].addEventListener("click", ()=>{
    number = 0
    number2 = 0
    h3[0].textContent = number
    h3[1].textContent = number2
})

