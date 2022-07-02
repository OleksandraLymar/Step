/**
 * Hometask #7
 * Пользователь указывает объем флешки в Гб. Программа
 * должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
const file = 820
//create a variable result and assign a value to it
let result=document.getElementById("result")
document.getElementById("btnStart").onclick=function(){
    let gb=document.getElementById("gb").value
    let amount = gb*1000 / file
    result.innerText="The amount of 820 MB files fit on a USB flash drive = " + amount
}