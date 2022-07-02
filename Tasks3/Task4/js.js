/**
 * Hometask #4
 * Определить количество цифр в введенном числе.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result =document.getElementById("result")
let but = document.getElementById("but").onclick=function() {
    let textB = document.getElementById("textB").value
    console.log(textB.length)
    result.innerText="The length of number = "+textB.length
}