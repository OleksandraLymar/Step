/**
 * HomeTask #10
 * Запросите у пользователя целое число и выведите в ответ,
 * четное число или нет. В задании используйте логические
 * операторы. В задании не надо использовать if или switch
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
//function that shows even number or not
document.getElementById("btnStart").onclick=function(){
    let number = document.getElementById("number").value
    let result = Boolean(number % 2)
    document.getElementById("result").innerText="The number is "+result
}