/**
 * Hometask #7
 * Запросить у пользователя сумму покупки и вывести сумму
 * к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
 * до 500 – 5%, от 500 и выше – 7%.
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let result = document.getElementById("result")
document.getElementById("btn").onclick=function (){
    let purchase = document.getElementById("purchase").value
    if(purchase<200){
        result.innerText="You do not have sale"
    }
    else if(purchase < 300){
        let price = purchase*3/100
        let finalPrice = purchase-price
        result.innerText="You have 3% sale, final price = "+finalPrice
    } else if(purchase<500){
        let price = purchase*5/100
        let finalPrice = purchase-price
        result.innerText="You have 5% sale, final price = "+finalPrice
    }else if(purchase>500){
        let price = purchase*7/100
        let finalPrice = purchase-price
        result.innerText="You have 7% sale , final price = "+finalPrice
    }
}