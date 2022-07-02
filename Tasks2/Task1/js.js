/**
 * Hometask #1
 * Запросить у пользователя его возраст и определить, кем он
 * является: ребенком (0–12), подростком (12–18), взрослым
 * (18_60) или пенсионером (60– ...).
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let age=document.getElementById("age").value
    console.log("The user entered - "+age)
    if(age<12){
        result.innerText="The user is a child"
    } else if(age<18){
        result.innerText="The user is a teenager"
    }else if(age<60){
        result.innerText="the user is an adult"
    }else if(age>60){
        result.innerText="the user is a retiree"
    }
}