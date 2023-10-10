// function add(a,b)
// {
//     var a,b,c;
//     c=10+20;
//     document.write("Sum="+c);
// }
// add(10,20);

//  Even or odd
function isOddOrEven(number) {
    if (number > 30 && number < 100) {
      if (number % 2 === 0) {
        document.write(number + ' is even');
      } else {
        document.write(number + ' is odd');
      }
    } else {
      document.write('Number is not within the range (31 to 99)');
    }
  }
  
  // Test cases
  isOddOrEven(25);   // Number is not within the range (31 to 99)
  isOddOrEven(40);   // 40 is even
  isOddOrEven(63);   // 63 is odd
  isOddOrEven(105);