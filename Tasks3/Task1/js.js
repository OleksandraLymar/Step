/**
 * Hometask #1
 * Подсчитать сумму всех чисел в заданном пользователем
 * диапазоне.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result=document.getElementById("result")
let but=document.getElementById("but").onclick=function (){
    let textB=document.getElementById("textB").value
    let textE=document.getElementById("textE").value
    let sum =0
    while(textB < textE){
         textB++;
         console.log("textB = "+textB)
         if(textB<textE){
             sum+=textB;
         }
        console.log("textB = "+textB)
    }
    result.innerText="Result = "+sum
}