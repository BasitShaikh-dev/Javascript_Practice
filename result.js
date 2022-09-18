var english = prompt("Enter English Marks heree..");
var urdu = prompt("Enter Urdu Marks heree..");
var math = prompt("Enter Math Marks heree..");
var physics = prompt("Enter Physics Marks heree..");
var Chemistry = prompt("Enter Chemistry Marks heree..");

result();

function result(){
    var plus = parseInt(english)+parseInt(urdu)+parseInt(math)+parseInt(physics)+parseInt(Chemistry);
    var percentage = 100 * plus / 500;

    var per = parseFloat(percentage) ;
    
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
