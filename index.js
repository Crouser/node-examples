var rect = require('./rectangle');

function solveRect(l,b)
{
    console.log("solving for l="+l + "and b="+b);

    rect(l,b,(err,rectangle)=>{

      if(err)
      {
          console.log("ERROR:" ,err.message)
      }
 
      else{

        console.log("the area of the rectangle of dimensions l ="+l + "and b =" +b +" is " + rectangle.area());

        console.log("the perimeter of the rectangle of dimensions l ="+l + "and b =" +b +" is " + rectangle.perimeter());
      }

    });

    console.log("This statement is after the call to rect()");
        
        

}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);