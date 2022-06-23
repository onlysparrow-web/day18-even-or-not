let n = parseInt(prompt("Enter the value of n"));
function evenCheck(n) {
  if (n % 2 == 0) {
    output = "The entered number is a even number";
  } else {
    output = "The given  number is not a even number";
  }
  return output;
}
var x = evenCheck(n);
console.log(x);
