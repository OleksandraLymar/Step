/**
 * Hometask #3
 * Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
//create a variable result and assign a value to it
let result=document.getElementById("result")
//Function that calculates the perimeter of a square
document.getElementById("btnStart").onclick=function(){
    let side=document.getElementById("side").value
    let perimeter=side*4
    result.innerText="Perimeter of the square = " + perimeter
}