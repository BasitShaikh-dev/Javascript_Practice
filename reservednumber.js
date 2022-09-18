// var num = 1234;
// var revnum = num.toString().split("").reverse();


// console.log("The Number " + num);
// console.log("The Number Is Reverse " + revnum);


let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
  lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

 console.log("Reverse number : "+rev);