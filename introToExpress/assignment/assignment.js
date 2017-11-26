var express = require("express");

var app = express();

app.get('/', function(req, res){
    res.send("Hi There, welcome to my assignment!");
})

app.get(app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }
    // console.log(animal, sounds.dog, sounds[animal])
    res.send("The " + animal + " says '" + sounds[animal] + "'");
    
}))

app.get('/repeat/:text/:number', function(req, res){
    var message = req.params.text;
    var times = Number(req.params.number);
    var result = "";
    for (var i = 0; i < Number(req.params.number); i++) {
        
        result += message + " ";
            
    }
    res.send(result);
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found...");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("app listineing on " + process.env.PORT, process.env.IP );    
});