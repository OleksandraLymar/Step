/**
 * Hometask #4
 * Запросить у пользователя год и проверить, високосный он
 * или нет. Високосный год либо кратен 400, либо кратен 4 и
 * при этом не кратен 100.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let year=document.getElementById("year").value
    console.log("The user entered - "+year)
    if (year%4 == 0 && year %100 !== 0)
    {
        result.innerText="Leap year"
    } else
        result.innerText="Not a Leap Year"
}