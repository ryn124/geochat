var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var socket = require('socket.io');

var index = require('./routes/index');
var users = require('./routes/users-route');
var chatrooms = require('./routes/chatroom-route');

var app = express();

// load the env vars
require('dotenv').load();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/chatrooms', chatrooms);
app.use('/login', users);

module.exports = app;