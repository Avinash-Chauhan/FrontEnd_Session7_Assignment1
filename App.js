//function with one parameter radius r 
function calculateArea(r)
{

   //declared variable Area a and applied formula of area of circle 
   var a=Math.PI*r*r;
  //printing result in console as output 
   console.log("Area of Circle is "+Math.round(a));
}
//calling the function with parameter value 7
calculateArea(7);