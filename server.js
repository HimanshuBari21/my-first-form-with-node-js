var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/getemail", (req, res) => {
        var name = req.query.name;
        var email = req.query.email;
        var phone = req.query.phone;
        var Address = req.query.Address;
        var subject = req.query.subject;
        var message = req.query.message;

        res.send(`Your name is ${name}<br>Your email id is ${email}<br>Your phone Number is ${phone}<br> Your Address is ${Address}<br> Your Subject is ${subject}<br> Your message is ${message}`);

    });

//start the server
app.listen(3000);

console.log("Something awesome to happen at http://localhost:3000");