/**
* Hometask #1
* Запросите у пользователя его имя и выведите в ответ «Привет, его имя!».
* @author Lymar Oleksandra <olex.lymar@gmail.com>
*/
//create a variable result and assign a value to it
let result=document.getElementById("result")
//create a function that takes the data from the form
document.getElementById("btnStart").onclick=function(){
    let userName=document.getElementById("userName").value
    result.innerText="Hello, "+userName+"!"
}
