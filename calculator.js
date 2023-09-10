const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const testText = {{shared.MY_TESTVAR}};


const app = express();
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("Result: " + result + testText);
  });

app.listen(port, "0.0.0.0", function (){
    console.log("Server started on port 3000")
});

