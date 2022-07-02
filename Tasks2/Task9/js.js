/**
 * Hometask #9
 * Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
 * балла. После вопросов выведите пользователю количество
 * набранных баллов.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let rightAnswer1 = document.getElementById("rightAnswer1")
    let rightAnswer2 = document.getElementById("rightAnswer1")
    let rightAnswer3 = document.getElementById("rightAnswer1")
    let score = 0
    if(rightAnswer1.checked){
        score+=2;
    }
    if(rightAnswer2.checked){
        score+=2;
    }
    if(rightAnswer3.checked){
        score+=2;
    }
    result.innerText="Your final score = "+score+" out of 6"
}