// node .\Node\helloword.js - write in console
console.log('Hello world!')

//node .\Node\helloword.js
//в браузере - http://localhost:3000/
//подключаем готовый веб сервер
const http = require("http");
//создать веб сервер который на любое действие говорит "Hello, Node.js!"
 http.createServer(function(request,response){
     response.end("Hello, Node.js!");
//подключить хост
 }).listen(3000,"127.0.0.1",function(){
     console.log("Server start");
})