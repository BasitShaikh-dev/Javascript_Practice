
var firstvalue = prompt("Enter Number 1st heree..");
var secondvalue = prompt("Enter Number 2nd heree..");

plus();
minus();
mulitply();
divide();

function plus(){
    var sum = parseInt(firstvalue);
    var sum2 = parseInt(secondvalue);
    console.log(sum+sum2);
}

function minus(){
    var minus = parseInt(firstvalue);
    var minus2 = parseInt(secondvalue);
    console.log(minus-minus2);
}

function divide(){
    var divide = parseInt(firstvalue);
    var divide2 = parseInt(secondvalue);
    console.log(divide/divide2);
}

function mulitply(){
    var multiply = parseInt(firstvalue);
    var multiply2 = parseInt(secondvalue);
    console.log(multiply*multiply2);
}
