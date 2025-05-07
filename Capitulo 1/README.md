# Eloquent Javascript en español | Capítulo 1

Para poder trabajar con tales cantidades de bits sin perderse, los separamos en trozos que representan piezas de información. En un entorno de JavaScript, esos trozos se llaman variables. Aunque todos los variables están hechos de bits, desempeñan roles diferentes. Cada valor tiene un tipo que determina su función. Algunos variables son números, otros son fragmentos de texto, otros son funciones, y así sucesivamente.

## Números

Los valores del tipo number son, como era de esperar, valores numéricos.

```
const number = 13
```

---

## Operadores

```
100 + 4 * 11
```

Los símbolos + y * se llaman operadores. El primero representa la suma y el segundo representa la multiplicación. Colocar un operador entre dos valores aplicará ese operador a esos valores y producirá un nuevo valor.

¿Significa este ejemplo “Sumar 4 y 100, y luego multiplicar el resultado por 11”, o se realiza primero la multiplicación antes de la suma? Como habrás adivinado, la multiplicación se realiza primero. Como en matemáticas, puedes cambiar esto envolviendo la suma entre paréntesis:

```
(100 + 4) * 11
```

Para la resta, está el operador **-**. La división se puede hacer con el operador **/**

### Precedencia (peso) de operadores

⚽️ Metáfora futbolera:
Imagina que tienes 4 jugadores para cobrar penales en este orden:

Prioridad 1 | 🔥 Multiplicación (*) → Cristiano Ronaldo

Prioridad 2 |  🧊 División (/) → Messi

Prioridad 3 | 🩼 Residuo (%) → Neymar

Prioridad 4 | 🌀 Suma (+) → James Rodríguez

Prioridad 5 | 🌪️ Resta (-) → Falcao

Si hay un penalti y no hay reglas, ¿quién patea primero?
➡️ CR7 y Messi, porque * y / tienen más prioridad que + y -.

ESTO EN EL CASO DE QUE EN LA OPERACIÓN NO HAYAN FRACCIONES SEPARADAS POR PARÉNTESIS, EN CASO DE HABERLAS ESTÁS TENDRÁN LA PRIORIDAD.

| Operador    | Jugador        | Prioridad | ¿Quién patea primero?               |
| ----------- | -------------- | --------- | ----------------------------------- |
| `*` y `/`   | CR7, Messi y Neymar   | Alta      | Se patean antes que suma o resta    |
| `+` y `-`   | James y Falcao | Media     | Solo patean después de \* y /       |
| Mismo nivel |                | —         | Se patea **de izquierda a derecha** |

Si CR7 patea los penales de multiplicación,
y Messi los de división,
entonces el módulo % sería como Neymar:
👉 mismo nivel de estrella, patea al mismo tiempo que ellos.
En caso de que no haya paréntesis que los separe se soluciona de izquierda a derecha:

```
10 + 6 % 4 * 2
10 + (6 % 4) * 2
10 + 2 * 2
10 + (2 * 2)
10 + 4
14
```


⚽️ Ejemplo con 4 operadores:
js
Copiar
Editar
2 + 3 * 4 - 5
Paso a paso:
🔥 Primero va la multiplicación (3 * 4 = 12) → CR7 patea primero.

Ahora tenemos: 2 + 12 - 5

Suma y resta tienen igual prioridad, así que se resuelve de izquierda a derecha:

2 + 12 = 14

14 - 5 = 9

✅ Resultado final: 9


```
10 - 2 + 3 * 4 / 2
10 - 2 + (3 * 4) / 2
10 - 2 + 12 / 2
10 - 2 + (12 / 2)
10 - 2 + 6 -> -> ->
8 + 6
14

---

(10 - 2 + 3) * 4 / 2
(8 + 3) * 4 / 2
11 * 4 / 2
(11 * 4) / 2
44 / 2
22

```

## Números especiales

NaN significa “no es un número”, aunque es un valor del tipo numérico. Obtendrás este resultado cuando, por ejemplo, intentes calcular 0 / 0 (cero dividido por cero), Infinity - Infinity, u cualquier otra operación numérica que no produzca un resultado significativo.


## Cadenas (string)

Las cadenas se utilizan para representar texto. Se escriben encerrando su contenido entre comillas.


```
`En el mar`
"Acostado en el océano"
'Flotando en el océano'
```

Puedes usar comillas simples, comillas dobles o acentos graves para marcar las cadenas, siempre y cuando las comillas al principio y al final de la cadena coincidan.

Las cadenas no se pueden dividir, multiplicar o restar. El operador + se puede usar en ellas, no para sumar, sino para concatenar —unir dos cadenas. La siguiente línea producirá la cadena "concatenar":

```
"con" + "cat" + "e" + "nar"
```

Las cadenas escritas con comillas simples o dobles se comportan de manera muy similar, la única diferencia radica en qué tipo de comilla necesitas escapar dentro de ellas. Las cadenas entre acentos graves, generalmente llamadas template literals, pueden hacer algunas cosas más. Aparte de poder abarcar varias líneas, también pueden incrustar otros valores.

```
`la mitad de 100 es ${100 / 2}`
```

Cuando escribes algo dentro de ${} en una plantilla literal, su resultado se calculará, se convertirá en una cadena y se incluirá en esa posición. Este ejemplo produce “la mitad de 100 es 50”.

## Valores booleanos

A menudo es útil tener un valor que distinga solo entre dos posibilidades, como “sí" y “no” o “encendido” y “apagado”. Para este propósito, JavaScript tiene un tipo Booleano, que tiene solo dos valores, true y false, escritos como esas palabras.

## Comparación
Los signos > y < son símbolos tradicionales para “es mayor que” y “es menor que”, respectivamente. Son operadores binarios. Aplicarlos da como resultado un valor booleano que indica si son verdaderos en este caso.

```
console.log("Aardvark" < "Zoroaster")
// → true
```

⚽️ Metáfora futbolera: el Ranking Unicode
Imagina que cada letra o símbolo es un jugador y Unicode es el ranking de habilidad.

Cada jugador (letra) tiene un número de ranking Unicode.

El que tiene un número más bajo, es considerado “menor” en la comparación.

🧩 Ejemplos de ranking (simplificado):
Carácter	Ranking Unicode
"A"	65
"Z"	90
"a"	97
"!"	33
" " (espacio)	32

Comparación entre jugadores
"Z" < "a" → true
En el ranking:

"Z" = 90

"a" = 97

Como Z tiene un número más bajo, gana la comparación.
👉 Z es "menor" que a

🏟️ Aunque en el diccionario ‘Z’ va después de ‘a’, en Unicode Z está por debajo, así que gana el duelo.


"Hola" < "Holanda" → true
JavaScript compara letra por letra:

"H" vs "H" → igual

"o" vs "o" → igual

"l" vs "l" → igual

"a" vs "a" → igual

Pero luego "Hola" se queda sin letras, y "Holanda" sigue

Como Hola es más corta pero idéntica hasta ese punto, se considera menor.

📏 Piensa que si dos equipos empatan todo el partido pero uno no tiene suficientes jugadores, el otro gana por ventaja numérica.

Otros operadores similares son >= (mayor o igual que), <= (menor o igual que), == (igual a), y != (no igual a).


## Operadores lógicos

El operador && representa el and lógico. Es un operador binario, y su resultado es verdadero solo si ambos valores dados son verdaderos.

```
console.log(true && false)
// → false
console.log(true && true)
// → true
```

El operador || representa el or lógico. **Produce verdadero si cualquiera de los valores dados es verdadero.**

```
console.log(false || true)
// → true
console.log(false || false)
// → false
```

Not se escribe con un signo de exclamación (!). Es un operador unario que invierte el valor dado; !true produce false y !false produce true.

### Operador ternario
Imagina que eres el director técnico de un equipo y estás decidiendo quién va a patear un penalti.

La decisión depende de si tu delantero estrella está en la cancha o no.

Podrías decir:

¿Está el delantero estrella en la cancha?

Sí → entonces él patea el penalti.

No → entonces lo patea el capitán del equipo.

Eso en código sería:

```
delanteroEnCancha ? "patea el delantero" : "patea el capitán"
```

## Valores vacíos

Hay dos valores especiales, escritos null y undefined, que se utilizan para denotar la ausencia de un valor significativo. Son valores en sí mismos, pero no llevan ninguna información. Muchas operaciones en el lenguaje que no producen un valor significativo devuelven undefined simplemente porque tienen que devolver algún valor.

## Conversión automática de tipos

Cuando algo que no se corresponde con un número de manera obvia (como "five" o undefined) se convierte en un número, obtienes el valor NaN. Más operaciones aritméticas en NaN siguen produciendo NaN, así que si te encuentras con uno de estos en un lugar inesperado, busca conversiones de tipo accidentales.

Cuando se comparan valores del mismo tipo usando el operador ==, el resultado es fácil de predecir: deberías obtener verdadero cuando ambos valores son iguales, excepto en el caso de NaN. Pero cuando los tipos difieren, JavaScript utiliza un conjunto de reglas complicado y confuso para determinar qué hacer. En la mayoría de los casos, simplemente intenta convertir uno de los valores al tipo del otro valor. Sin embargo, cuando null o undefined aparece en cualquiera de los lados del operador, produce verdadero solo si ambos lados son uno de null o undefined.


```
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

¿Qué sucede si quieres probar si algo se refiere al valor preciso false? Expresiones como 0 == false y "" == false también son verdaderas debido a la conversión automática de tipos. Cuando no deseas que ocurran conversiones de tipo, hay dos operadores adicionales: === y !==. El primero prueba si un valor es precisamente igual al otro, y el segundo prueba si no es precisamente igual. Por lo tanto, "" === false es falso como se espera. Recomiendo usar los operadores de comparación de tres caracteres defensivamente para evitar conversiones de tipo inesperadas que puedan complicarte las cosas. Pero cuando estés seguro de que los tipos en ambos lados serán los mismos, no hay problema en usar los operadores más cortos.

## Cortocircuito de operadores lógicos

### Operador ||

Escenario: Elección de portero para el partido
Tienes dos posibles arqueros:

Arquero titular (izquierda).

Arquero suplente (derecha).

Cuando vas a elegir quién ataja, dices:

"Si el arquero titular está disponible, él juega. Si no, juega el suplente."

Eso en código con el operador || sería:

```
arqueroTitular || arqueroSuplente
🧠 ¿Qué hace JavaScript internamente?
Evalúa el primer valor (el de la izquierda).

Si ese valor se puede interpretar como true (o sea, no es null, undefined, false, 0, NaN o ""), lo devuelve tal cual.

Si ese valor es considerado false, entonces evalúa y devuelve el valor del lado derecho.
```

### Operador ??

Se asemeja a ||, pero devuelve el valor de la derecha solo si el de la izquierda es null o undefined, no si es algún otro valor que se pueda convertir en false. A menudo, este comportamiento es preferible al de ||.

```
console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
```

### Operador &&

Para que puedas convocar a tu delantero estrella, necesitas que:

Esté en forma física.

Tenga el pasaporte vigente (porque es partido internacional).

Entonces dirías:

"Si está en forma y tiene pasaporte, lo convoco."

Eso sería:

js
Copiar
Editar
estaEnForma && tienePasaporte
🔍 ¿Qué devuelve esto?
Si estaEnForma es false (ej. lesionado), ya no importa lo demás. Devuelve ese valor directamente.

Si estaEnForma es true, entonces revisa el segundo valor (tienePasaporte).

🧪 Ejemplos prácticos
```
true && "Messi"     // Resultado: "Messi"
false && "Messi"    // Resultado: false
"Listo" && "Vamos"  // Resultado: "Vamos"
"" && "Vamos"       // Resultado: ""
```



## Operadores unarios

#### ¿Qué significan los operadores unarios?
Un operador unario es una acción que se aplica a una sola cosa (una variable o un valor) para obtener un nuevo resultado. Es como una instrucción corta que modifica o te dice algo sobre ese único elemento.

Imagina que tienes una caja (la variable) y quieres hacerle algo a lo que hay dentro. Un operador unario es como una herramienta especial que solo necesita una caja para hacer su trabajo.

Operadores Aritméticos Unarios:

+ (Unario más): Intenta convertir el operando en un número si no lo es ya. No realiza ninguna otra operación sobre el valor.

```
let str = "10";
let num = +str; // num ahora es el número 10
let bool = true;
let numBool = +bool; // numBool ahora es el número 1
let notANumber = +"hola"; // notANumber ahora es NaN (Not-a-Number)
```

- (Unario menos o negación): Intenta convertir el operando en un número y luego niega su valor.

```
let x = 5;
let y = -x; // y ahora es -5
let strNum = "20";
let negStr = -strNum; // negStr ahora es el número -20
++ (Incremento): Incrementa el valor del operando en 1. Puede usarse como prefijo (++variable) o sufijo (variable++).
```

Prefijo: Primero incrementa la variable y luego devuelve el nuevo valor.
Sufijo: Primero devuelve el valor actual de la variable y luego la incrementa.


```
let a = 2;
let b = ++a; // a ahora es 3, b ahora es 3

let c = 5;
let d = c++; // d ahora es 5, c ahora es 6
```
- (Decremento): Decrementa el valor del operando en 1. Al igual que el incremento, tiene formas de prefijo (--variable) y sufijo (variable--) con un comportamiento similar en cuanto al orden de la operación y la devolución del valor.

```
let e = 7;
let f = --e; // e ahora es 6, f ahora es 6

let g = 10;
let h = g--; // h ahora es 10, g ahora es 9
```

- Operadores Lógicos Unarios:
! (NOT lógico): Invierte el valor booleano del operando. Si el operando es true, devuelve false, y si es false, devuelve true. También intenta convertir valores no booleanos a booleanos antes de la negación (siguiendo las reglas de "truthy" y "falsy").

```
let verdadero = true;
let falso = !verdadero; // falso ahora es false

let cadenaVacia = "";
let negCadenaVacia = !cadenaVacia; // negCadenaVacia ahora es true (porque "" es falsy)
```

- Otros Operadores Unarios:

typeof: Devuelve una cadena que indica el tipo de dato del operando.

```
let numero = 10;
let tipoNumero = typeof numero; // tipoNumero ahora es "number"

let texto = "Hola";
let tipoTexto = typeof texto; // tipoTexto ahora es "string"

let indefinido;
let tipoIndefinido = typeof indefinido; // tipoIndefinido ahora es "undefined"
```
- void: Evalúa una expresión y devuelve undefined. Se utiliza a menudo para evitar que el resultado de una expresión aparezca en ciertos contextos (como un href en un enlace).

```
<a href="javascript:void(0)">No hacer nada al hacer clic</a>
```
- delete: Se utiliza para eliminar una propiedad de un objeto o un elemento de un array (aunque su comportamiento con arrays puede ser confuso y generalmente no se recomienda para eliminar elementos de arrays).

```
let objeto = { nombre: "Juan", edad: 30 };
delete objeto.edad; // La propiedad 'edad' se elimina del objeto

let array = [1, 2, 3];
delete array[1]; // array ahora es [1, undefined, 3]
```

En resumen, los operadores unarios en JavaScript son herramientas concisas para realizar operaciones comunes en un solo valor, como conversiones de tipo, negación, incremento, decremento y determinación del tipo de dato.
