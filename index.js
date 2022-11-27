// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
   if(someValue > 42){
      return(someValue - 42);
   }else {
      return ( 42- someValue);
   }
}

function distanceFromHqInFeet (someValue) {
   return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start,stop){
   if (stop>start){
      return ( stop - start)*264;
   }else if(start>stop){
      return (start-stop)*264;
   }
}
function calculatesFarePrice(start,destination){
   let distance = distanceTravelledInFeet(start,destination);
   if(distance<=400){
      return 0;
   }
   if (distance>=400 && distance<=2000){
      return (distance-400)*0.02;
   }
   else if (distance>=2000&& distance<=2500){
      return 25;
   }
   else if (distance > 2500){
      return "cannot travel that far";
   }
}
