function echo(string, number){
    if (string !== "") {
        for (var i = 0; i < number; i++) {
            console.log(string);
        }    
    } else {
        console.log("please enter string and number")
    }
    
}


echo("Ehco!!!", 10);
echo("Tater Tots", 3);