<<<<<<< HEAD
var realNumber = "5612";

 const guess = function(number1) {
  // TODO: Logic Here
  let result = "";
  //console.log(realNumber);  

  let real = (realNumber.split(""));
  let actual = number1.split("");

  // actual.forEach(element => {
  //   // TODO: Si elemnt esta en real entonces agregue una O o una X a result
  // });
  
//Test funcional 
  // for (var i=0; i<realNumber.length; i++){
  //   for (var j=0; j<number1.length; j++){
  //     if(realNumber[i] === number1[j]){
  //       if(i == j){
  //         result = result + "x";
  //       }else{
  //       result = result + "o";
  //       }
  //     }      
  //   }
  // }

  //Web con emojis funcional
  for (var i=0; i<realNumber.length; i++){
    for (var j=0; j<number1.length; j++){
      if(realNumber[i] === number1[j]){
        if(i == j){
          result = result + "🥳";
        }else{
        result = result + "⛔️";
        }
      }      
    }
    if (!result){
      result = result + "💔";
    }
  }
=======
var realNumber = "1234";

const guess = function(number1) {
  // TODO: Logic Here
  let result = "";
  console.log(realNumber);

  let real = realNumber.split("");
  let actual = number1.split("");

  actual.forEach(element => {
    // TODO: Si elemnt esta en real entonces agregue una O o una X a result
  });

>>>>>>> 8aa8c5801e236e8d7ea59f06c46fee2e1e0826d0

  return result;
}

<<<<<<< HEAD
/* const setNumber = function (number1) {
  realNumber = number1;
} */

module.exports = guess;
// module.exports.guess = guess;
// module.exports.setNumber = setNumber;
=======
const setNumber = function (number1) {
  realNumber = number1;
}

module.exports.guess = guess;
module.exports.setNumber = setNumber;
>>>>>>> 8aa8c5801e236e8d7ea59f06c46fee2e1e0826d0
