/**
 * Hometask #10
 * Запросить дату (день, месяц, год) и вывести следующую
 * за ней дату. Учтите возможность перехода на следующий
 * месяц, год, а также високосный год.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let date = document.getElementById("date").value
    date = date.split('-')
    let oldDate = new Date(date[2], date[1]-1, date[0])
    oldDate.setDate(oldDate.getDate()+1)
    result.innerText = oldDate
}