/**
 * Hometask #8
 * Запросить у пользователя длину окружности и периметр
 * квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let square = document.getElementById("square").value
    let circle = document.getElementById("circle").value
    if(square>circle){
        result.innerText="circle fit in the specified square"
    } else{
        result.innerText="circle don`t fit in the specified square"
    }
}