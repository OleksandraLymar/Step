/**
 * HomeTask #8
 * Пользователь вводит сумму денег в кошельке и цену одной
 * шоколадки. Программа выводит сколько шоколадок может
 * купить пользователь и сколько сдачи у него останется.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
//create a variables result/balance and assign a value to it
let result = document.getElementById("result")
let balance = document.getElementById("balance")
document.getElementById("btnStart").onclick=function(){
    let money=document.getElementById("money").value
    console.log(money)
    let chocolate=document.getElementById("chocolate").value
    console.log(chocolate)
    let amount = money / chocolate
    console.log(amount)
    let balanceLeft = (money - (amount * chocolate))
    console.log(balanceLeft)
    result.innerText="The amount of chocolates you can buy = " + amount
    balance.innerText="Balance = " + balanceLeft
}
