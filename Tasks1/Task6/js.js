/**
 * Hometask #6
 * Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в
 * константе.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */

//create a variable result and assign a value to it
let result=document.getElementById("result")
//Currency Converter
document.getElementById("btnStart").onclick=function(){
    let dollar=document.getElementById("dollar").value
    let euro= dollar * 0.88
    result.innerText="Euro = " + euro
}