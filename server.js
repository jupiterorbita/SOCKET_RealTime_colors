var express = require("express");
var app = express();
// var bodyParser = require('body-parser');
var path = require("path");
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// #### server start and SOCKET
const server = app.listen(5000);
const io = require('socket.io')(server);

app.get('/', function(req, res){
    console.log('SERVER > "/" ');
    res.render('index');
})

var now_btn = "purple";
io.on('connection', function(socket){

    io.emit('now_btn', {now_btn: now_btn});

    //listen GREEN
    socket.on('new_btn_green', function(){
        console.log('user pressed GREEN btn');
        now_btn = 'green';
        io.emit('now_btn', {now_btn: now_btn});
    })
    //listen RED
    socket.on('new_btn_red', function(){
        console.log('user pressed RED btn');
        now_btn = 'red';
        io.emit('now_btn', {now_btn: now_btn});
    })
    //listen PINK
    socket.on('new_btn_pink', function(){
        console.log('user pressed PINK btn');
        now_btn = 'pink';
        io.emit('now_btn', {now_btn: now_btn});
    })










})