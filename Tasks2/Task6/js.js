/**
 * Hometask #6
 * Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
 * UAN или AZN, и получает в ответ соответствующую сумму
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let currency=document.getElementById("currency").value
    let selectcur =document.getElementById("selectcur").value
    let one=document.getElementById("one").value
    let two=document.getElementById("two").value
    console.log("The user entered - "+currency)
    if(selectcur == one){
        eur=currency*32
        result.innerText="In Euro "+eur
    }else if(selectcur==two){
        uan=currency*28.34
        result.innerText="In hrivna "+uan
    }else if(selectcur==three){
        azn=currency*1.69
        result.innerText="In azn "+azn
    }
}