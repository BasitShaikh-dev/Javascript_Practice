// var subjects = ["english", "urdu", "maths"];

// var total_marks = 0;
// for(var i = 0; i<subjects.length; i++){
//     total_marks += parseInt(prompt("Enter your marks"));
// }
// console.log(total_marks);

var ar = ["English","Urdu","Math","Physics","Chemistry"];
var sum = 0;
var pro;
var ans;

for(var i=0; i < ar.length; i++){

    sum += parseInt(prompt("Enter "+ ar[i] +" Marks heree..",ans));
    
}
    console.log(sum);




result();

function result(){

    var percentage = 100 * sum / 500;

    var per = percentage ;
    
    console.log(per+"%");

    switch(true){
    case per > parseFloat(90) :
        console.log("A1 Grade");
        break;

    case per > parseFloat(80) :
        console.log("A+ Grade");
        break;

    case per > parseFloat(70) :
        console.log("A Grade");
        break;

    case per > parseFloat(60) :
        console.log("B Grade");
        break;

    case per > parseFloat(50) :
        console.log("C Grade");
        break;

    case per > parseFloat(40) :
        console.log("D Grade");
        break;
        
    default :
       console.log("Fail");
       break;
    }



}


