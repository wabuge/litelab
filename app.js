'use strict'
const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()

// get routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('index', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

//app.use(express.static('css'));
//app.use(express.static('img'));

  //static file
  //app.use('/css',express.static(__dirname +'/css'));
  app.use('/img',express.static(__dirname +'/img'));
  app.use('/lib', express.static(__dirname + '/lib'))
  app.use(express.static(path.join(__dirname, '/lib')));
  

  app.use("/css", express.static(path.join(__dirname, "css")));
  app.use("/lib", express.static(path.join(__dirname, "lib")));
  app.use("/img", express.static(path.join(__dirname, "img")));
  app.use("/css", express.static(path.join(__dirname, "css")));
  

//serving html files

//app.use('/img',express.static(__dirname +'/img'));

//port
const PORT = process.env.PORT || 5030;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
