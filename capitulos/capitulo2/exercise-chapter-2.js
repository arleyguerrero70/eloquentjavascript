/*Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:

#
##
###
####
#####
######
#######
*/
// for (let count = 0; count <= 7; count++) {
//     console.log(count)
// }

// console.log('---')
// console.log('---')
// console.log('---')

/* Solución del libro
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/

/* FizzBuzz
Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones.
- Para los números divisibles por 3, imprime "Fizz" en lugar del número
- Para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.
- Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los números que son divisibles solo por uno de esos).
*/

for (let count = 0; count <= 100; count++) {
    let valueOne = "Fizz"
    let valueTwo = "Buzz"
    let valueThree = "FizzBuzz"

    if (count % 3 == 0) {
        console.log(valueOne)
    } else if ((count % 5 == 0) && (!count % 3 == 0)) {
        console.log(valueTwo)
    } else if ((count % 5 == 0) && (count % 3 == 0)) {
        console.log(valueThree)
    } else {
        console.log(count)
    }
}

/* Solución del libro
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/