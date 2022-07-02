/**
 * Hometask #2
 * Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
 * Текущий год укажите в коде как константу.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */

const thisYear = 2022
//create a variable result and assign a value to it
let result=document.getElementById("result")
document.getElementById("btnStart").onclick=function(){
    let birthYear=document.getElementById("birthYear").value
    let age = thisYear-birthYear
    result.innerText="Your age is " + age
}