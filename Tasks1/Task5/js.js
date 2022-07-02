/**
 * Hometask #5
 * Запросите у пользователя расстояние в км между двумя
 * городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы
 * успеть вовремя.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */

//create a variable result and assign a value to it
let result=document.getElementById("result")
//Function that calculates speed
document.getElementById("btnStart").onclick=function(){
    let distance=document.getElementById("distance").value
    let time=document.getElementById("time").value
    let speed=distance/time
    result.innerText="You need to have this speed to get in time = " + speed
}