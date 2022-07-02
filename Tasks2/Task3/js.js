/**
 * Hometask #3
 * Запросить у пользователя трехзначное число и проверить,
 * есть ли в нем одинаковые цифры.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let number=document.getElementById("number").value
    console.log("The user entered - "+number)
    if(number[0]==number[1]||number[0]==number[2]||number[2]==number[1]){
        result.innerText="There are similar numbers"
    } else{
        result.innerText="All the numbers are different"
    }
}