let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productRouter = require('./routes/products')
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/products',productRouter);
module.exports = app;
