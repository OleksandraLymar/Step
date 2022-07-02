/**
 * HomeTask #9
 * Запросите у пользователя трехзначное число и выведите
 * его задом наперед. Для решения задачи вам понадобится
 * оператор % (остаток от деления).
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
//create a variables result/balance and assign a value to it
let result = document.getElementById("result")
document.getElementById("btnStart").onclick=function(){
    let number=document.getElementById("number").value
    console.log("The user entered "+ number)

    let tmpNumber = number
    let strResult = ' '
    while(tmpNumber >= 10){
        strResult += tmpNumber % 10 + ' '
        tmpNumber = Math.floor(tmpNumber / 10)
    }
    strResult += tmpNumber
    console.log(strResult)
    result.innerText=strResult

}