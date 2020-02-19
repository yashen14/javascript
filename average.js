function(calculatorA) (averagers){
var totalOutcome = 0;

  averagers.forEach(function(avera){
    totalOutcome += avera;
  });
  
  var Outcome = totalOutcome/averagers.length;
  return Math.round(Outcome);
  }
  
  //As dummy info enter any of the below and it will run if a script
  //or as a node backend up to you!
  
  //message me if any questions?OKAY!
  
  //Dummy Entry $1
    //node output also outputs to the console of a web application
  //var marks = [51,45,55,89,82,88];
  //console.log(calculatorA(marks)); outcome should be 68 
  
  //also if you want a alert on a basic html php or ejs form
  //var marks= [51,45,55,89,82,88];
  
  //alert(calculatorA(marks));
