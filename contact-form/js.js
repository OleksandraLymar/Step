/**
 * @author Lymar Oleksandra <olex.lymar@gmail.com>
 */
let contacts = [] //создание масива
let lstContact = document.getElementById("lstContact")
let txtNumber = document.getElementById("txtNumber")
let txtKindOfNumber = document.getElementById("txtKindOfNumber")
//Метод удаления элемента из массива
document.getElementById("btnShift").onclick = function (){
    contacts.shift()
    contacts.shift()
    buildContactList()
}

//Метод удаления элемента из массива
document.getElementById("btnPop").onclick = function (){
    contacts.pop()
    contacts.pop()
    buildContactList()
}

//Метод добавления элемента в массив
document.getElementById("btnUnShift").onclick = function (){
    if(txtNumber.value.length === 0){
        alert("Enter the number!")
        console.log("String is empty")
        return
    }
    if(txtKindOfNumber.value.length === 0){
        alert("What kind of number?")
        console.log("String is empty - kind of number")
        return
    }
    //добавить в масив текст из input
    contacts.unshift(txtNumber.value)
    contacts.push(txtKindOfNumber.value)
    //обновление строки
    txtNumber.value=" "
    txtKindOfNumber.value=" "
    buildContactList()
}

//Метод добавления элемента в массив
document.getElementById("btnPush").onclick = function (){
    if(txtNumber.value.length === 0){
        alert("Enter the number!")
        console.log("String is empty")
        return
    }
    if(txtKindOfNumber.value.length === 0){
        alert("What kind of number?")
        console.log("String is empty - kind of number")
        return
    }
    //добавить в масив текст из input
    contacts.push(txtKindOfNumber.value)
    contacts.push(txtNumber.value)
    //обновление строки
    txtNumber.value=" "
    txtKindOfNumber.value=" "
    buildContactList()
}

//Функция, которая строит список с контактов
function buildContactList(){

    lstContact.innerHTML=" ";
    for(let i=0; i<contacts.length; i++){
        if(contacts === undefined) continue
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.innerText=contacts[i]
        li.appendChild(span)
        lstContact.appendChild(li)
    }
}
//функция, которая позволяет ввести только цифры
function num(){
    if (event.keyCode < 48 || event.keyCode > 57)
        event.returnValue= false;
}

let tel = document.querySelector('#txtKindOfNumber')
let notNumbers = /[0-9]/g
//Функция, которая запрещает вводить цифры
tel.oninput=function (){
    this.value = this.value.replace(notNumbers, '')
}