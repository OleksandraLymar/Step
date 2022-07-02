/**
 * Hometask #5
 * Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let number=document.getElementById("number").value
    console.log("The user entered - "+number)
    if (number[0]==number[4] && number[1]==number[3]){
        result.innerText="The number is a palindrom"
    } else{
        result.innerText="The number is not palindrom"
    }
}