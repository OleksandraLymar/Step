/**
 * Hometask #4
 * Запросите у пользователя радиус окружности и выведите
 * площадь такой окружности.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */

//create a variable result and assign a value to it
let result=document.getElementById("result")
//Function that calculates the perimeter of a square
document.getElementById("btnStart").onclick=function(){
    let radius=document.getElementById("radius").value
    let square=3.14 * radius*radius
    result.innerText="Area of the circle = " + square
}