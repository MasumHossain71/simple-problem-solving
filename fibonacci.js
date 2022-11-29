// function fibonacci(n){
//    let fibo = [0,1];
//    for (var i = 2; i<= n; i++){
//       fibo[i] = fibo[i - 1] + fibo[i - 2];
//    }
//    return fibo;
// }
// let result = fibonacci(20);
// console.log(result);

// fibonacci calculation in recursive way 

function fibonacci(n){
   if(n == 0){
      return 0;
   }
   else if(n == 1){
      return 1;
   }
   else{
      return fibonacci(n-1) + fibonacci(n-2);
   }
}
let result = fibonacci(30);
console.log(result);