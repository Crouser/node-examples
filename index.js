var rect={

    perimeter : (x,y) => (2*(x+y)),
    area      : (x,y) => (x*y)

};

function solveRect(l,b)
{
    console.log("solving for l="+l + "and b="+b);

    if(l<=0 ||b<=0){
        console.log("rectangle dimensions must be positive : l="+l + ", and b=" +b);
    }

    else{

        console.log("the area of the rectangle is" +rect.area(l,b));

        console.log("the perimeter of the rectangle is" +rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);