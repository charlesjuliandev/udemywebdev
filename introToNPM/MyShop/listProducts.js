var faker = require("faker");

var printPrice = function(){
    console.log(faker.fake("{{commerce.productName}} – ${{commerce.price}}"));
}

for (var i = 10; i > 0; i--) {
    printPrice();    
}


// console.log(faker.helpers.createCard())