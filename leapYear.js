function leapYear(years){
   var result; 
   if (years/400){
     result = true
   }
   else if(years/100){
     result = false
   }
   else if(years/4){
     result= true
   }
   else{
     result= false
   }
   return result
}
let calculation = leapYear(2024);
console.log(calculation);