// Import test
let test = require('assert');
// var codebreaker = require('../codebreaker');
var guess = require('../codebreaker');

describe('Test pass', function () {
  it('is true', function () {
    let saludo = "Hola";
    test.equal(saludo, "Hola", "Saludo es no igual a Hola");
  })
})

describe('Codebreaker Test', function(){

  // beforeEach(function () {
  //   codebreaker.setNumber('5612')
  // })

  it ('Debe retornar un o 1094', function(){
    let result = guess("1094")
    test.equal(result, "o", "Un numero correcto pero en posicion incorrecta");
  })

  it ('Debe retornar un xo 5871', function(){
    let result = guess("5871")
    test.equal(result, "xo", "Tiene un numero en la posicion correcta");
  })

  it ('Debe retornar un oo 8571', function(){
    let result = guess("8571")
    test.equal(result, "oo", "Tiene dos numeros en la posicion incorrecta");
  })

  it ('Debe retornar un ox 9542', function(){
    let result = guess("9542")
    test.equal(result, "ox", "Tiene dos numeros correcto pero uno de ellos esta en la posicion incorrecta y el otro si");
  })

  it ('Debe retornar un x 5987', function(){
    let result = guess("5987")
    test.equal(result, "x", "Tiene numero correcto en la posicion correcta");
  })

  it ('Debe retornar un xx 5718', function(){
    let result = guess("5718")
    test.equal(result, "xx", "Tiene dos numeros en la posicion correcta");
  })

  it ('Debe retornar un oxx 4652', function(){
    let result = guess("4652")
    test.equal(result, "oxx", "Tiene dos numero en la posicion correcta y el otro esta en la posicion incorrecta");
  })

  it ('Debe retornar un oxo 2816', function(){
    let result = guess("2816")
    test.equal(result, "oxo", "Tiene un numero en la posicion correcta y dos en la posicion incorrecta");
  })
//5612
  it ('Debe retornar un oxox 1652', function(){
    let result = guess("1652")
    test.equal(result, "oxox", "Tiene dos numeros en la posicion correcta y los otros dos en la posicion incorrecta");
  })

  it ('Debe retornar un xoox 5162', function(){
    let result = guess("5162")
    test.equal(result, "xoox", "Tiene dos numeros en la posicion incorrecta y otros dos en la posicion correcta");
  })

  it ('Debe retornar un xxxx 5612', function(){
  let result = guess("5612")
  test.equal(result, "xxxx", "Tiene los numeros en la posicion correcta");
  })

})
