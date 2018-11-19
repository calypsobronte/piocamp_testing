var buttonGuess = document.getElementById("guess");
var number = document.getElementById("number");
var list = document.getElementById("list");

buttonGuess.addEventListener("click", function () {
  newNumber = number.value;
  result = guess(newNumber);

  console.log(newNumber);

  list.innerHTML += `
  <tr>
    <td>${newNumber}</td>
    <td>${result}</td>
  </tr>
  `;
<<<<<<< HEAD
});
=======
});
>>>>>>> 8aa8c5801e236e8d7ea59f06c46fee2e1e0826d0
