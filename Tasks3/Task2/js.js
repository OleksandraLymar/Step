/**
 * Hometask #2
 * Запросить 2 числа и найти только наибольший общий
 * делитель.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result=document.getElementById("result")
let but=document.getElementById("but").onclick=function (){
    let textB=document.getElementById("textB").value
    let textE=document.getElementById("textE").value
    let sum =0
    while(textB !=0 && textE !=0){
        if(textB>textE){
            textB=textB%textE
        }else{
            textE=textE%textB
        }
        console.log(textB+textE)
    }
    result.innerText="Result = "+textB+textE
}