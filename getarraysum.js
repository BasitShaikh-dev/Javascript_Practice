var subjects = ["English", "Urdu", "Maths","Physics","Chemistry"];
var marks = [];
var sum =0;
for(var i = 0; i<subjects.length; i++){
    console.log(i);
    marks[i] = parseInt(prompt("Enter your "+ subjects[i] +" marks"));

    sum += marks[i];
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
