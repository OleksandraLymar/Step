/**
 * Hometask #2
 * Запросить у пользователя число от 0 до 9 и вывести ему
 * спецсимвол, который расположен на этой клавише (1–!,
 * 2–@, 3–# и т. д).
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let number=document.getElementById("number").value
    console.log("The user entered - "+number)
    switch(number){
        case '0':
            console.log('0 is )');
            result.innerText="0 is )"
            break;
        case '1':
            console.log('1 is !');
            result.innerText="1 is !"
            break;
        case '2':
            console.log('2 is @');
            result.innerText="2 is @"
            break;
        case '3':
            console.log('3 is #');
            result.innerText="3 is #"
            break;
        case '4':
            console.log('4 is $');
            result.innerText="4 is $"
            break;
        case '5':
            console.log('5 is %');
            result.innerText="5 is %"
            break;
        case '6':
            console.log('6 is ^');
            result.innerText="6 is ^"
            break;
        case '7':
            console.log('7 is &');
            result.innerText="7 is &"
            break;
        case '8':
            console.log('8 is *');
            result.innerText="8 is *"
            break;
        case '9':
            console.log('9 is (');
            result.innerText="9 is ("
            break;
    }
}