/**
 * Hometask #3
 * Запросить у пользователя число и вывести все делители
 * этого числа.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result =document.getElementById("result")
let but = document.getElementById("but").onclick=function() {
    let textB = document.getElementById("textB").value
    for (i=1;i<=textB;i++)
        if (textB%i==0)
            document.write(i+ " ");
}