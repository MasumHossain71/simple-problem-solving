// let i = 1;
// let factorial = 1;
// while (i <= 10) {
//   factorial = factorial * i;
//   i++;
// }
// console.log(factorial);

// using function 
function factorial(n) {
  var i = 1;
  var factorial = 1;
  while (i <= n) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}
let result = factorial(10);
console.log(result);