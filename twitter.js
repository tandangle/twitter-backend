var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// Array of all messages
let allMessages = [
    {
        "name": "Tan",
        "message": "This is a test message"
    }
];

console.log(allMessages);

app.post("/", bodyParser.json(), function(req, res) {
    let message = {};
    message["name"] = req.body.name;
    message["message"] = req.body.message;
    allMessages.push(message);
    console.log(req);
    res.send("Tweet received");
    console.log(allMessages);
})

app.get("/", function(req, res) {
    res.send(JSON.stringify(allMessages))
    })


app.listen(3000, function(){
    console.log("Tweet away")
})