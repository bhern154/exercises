arr = [1, 2, 3, 4];

// Version 1
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
// }

// Version 2
const double = (arr) => {return arr.map((val) => val * 2);}

// --------------

// Version 1
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

// Version 2
//   const squareAndFindEvens = numbers => {
//     var squares = numbers.map(num => num ** 2 );
//     var evens = squares.filter(square => square % 2 === 0);
//     return evens;
//   }

// Version 3
const squareAndFindEvens = numbers => (numbers.map(num => num ** 2 ).filter(square => square % 2 === 0));