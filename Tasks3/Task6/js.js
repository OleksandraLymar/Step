/**
 * Hometask #5
 * Запросить у пользователя 10 чисел и подсчитать, сколько
 * он ввел положительных, отрицательных и нулей. При этом
 * также посчитать, сколько четных и нечетных. Вывести
 * статистику на экран. Учтите, что достаточно одной пере-
 * менной (не 10) для ввода чисел пользователем.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
// переменная, в которой хранится выбранное математическое действие
var mathaction;

function func() {
    let result;
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    switch (mathaction) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}