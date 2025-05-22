# Eloquent Javascript en español | Capítulo 3

## Funciones

La gente piensa que la informática es el arte de los genios, pero la realidad actual es la opuesta, simplemente muchas personas haciendo cosas que se construyen unas sobre otras, como un muro de mini piedras

Una función se crea con una expresión que comienza con la palabra clave function. Las funciones tienen un conjunto de parámetros (en este caso, solo x) y un cuerpo, que contiene las declaraciones que se ejecutarán cuando se llame a la función. El cuerpo de una función creada de esta manera siempre debe estar envuelto entre llaves, incluso cuando consiste en una única declaración.

```
const roundTo = function(n, step) {
  let resto = n % step;
  return n - resto + (resto < step / 2 ? 0 : step);
};
```

⚽ Explicación en contexto futbolístico
Imagina que estás entrenando a un jugador para que patee la pelota hacia el arco desde distintas distancias, pero siempre debe posicionarse en una marca que está pintada cada ciertos metros (por ejemplo, cada 5 metros).

n es la posición actual del jugador, quizás se detuvo en el metro 7.

step es la distancia entre marcas en la cancha (5 metros).

La función decide:
→ ¿Debe el jugador retroceder a la marca anterior (metro 5)?
→ ¿O avanzar a la siguiente marca (metro 10)?

La decisión se toma según qué tan cerca está de cada marca:

Si el jugador está más cerca de la marca anterior, se queda ahí.

Si está más cerca de la siguiente marca, avanza hacia ella.

💡 Ejemplo en la cancha:

Si el jugador está en el metro 7:

Más cerca del 5 → se ubica en el 5.

Si está en el metro 8:

Más cerca del 10 → se ubica en el 10.

Así, el entrenador siempre sabe en qué punto fijo entrenar al jugador, sin importar dónde se haya detenido.

### Return

Cuando el control llega a una instrucción de ese tipo, salta inmediatamente fuera de la función actual y le da el valor devuelto al código que llamó a la función. Una palabra clave return sin una expresión después de ella hará que la función devuelva **undefined**. Las funciones que no tienen ninguna instrucción return en absoluto, como makeNoise, devuelven igualmente **undefined.**

Los parámetros de una función se comportan como enlaces habituales, pero sus valores iniciales son dados por el llamador de la función, no por el código en la función en sí misma

### Enlaces y ámbitos (variables y alcance)

Cada variable tiene un alcance, que es la parte del programa en la que la variable es visible (usable).
Para las variables definidas fuera de cualquier función, bloque o módulo, el ámbito (alcance) es todo el programa, puedes hacer referencia a esos enlaces (variables) donde quieras, esto se conoce actualmente como scope.

Imaginemos que:

Un ámbito (scope) es como una zona del campo o del estadio.

Una variable es como un jugador con un nombre específico (por ejemplo, "n").

Cuando un jugador (variable) está en una zona interna (como una función), puede ver a los jugadores que están en zonas externas, a menos que ya haya un jugador con el mismo nombre en su zona.

⚽ Traducción futbolística del concepto de ámbito
Imaginemos que:

Un ámbito (scope) es como una zona del campo o del estadio.

Una variable es como un jugador con un nombre específico (por ejemplo, "n").

Cuando un jugador (variable) está en una zona interna (como una función), puede ver a los jugadores que están en zonas externas, a menos que ya haya un jugador con el mismo nombre en su zona.

🏟️ “Mirar hacia afuera”:
Si estás en la zona de entrenamiento de delanteros (un bloque o función), puedes ver a los entrenadores o reglas del campo más general (ámbito global).
Eso es como cuando una función puede acceder a variables globales o de ámbitos exteriores.

```
let n = 10;

function verNumero() {
  console.log(n); // Ve el "n" global: 10
}
👉 Aquí, el jugador en la zona de entrenamiento mira hacia la tribuna y ve el cartel que dice "n = 10".
```

🧍‍♂️🧍‍♂️ Cuando hay dos jugadores con el mismo nombre ("n")
Ahora imagina que en la zona interna hay otro jugador también llamado "n". El entrenador interno solo ve a su propio "n", no al de afuera.

```
let n = 10;

function halve(n) {
  return n / 2;
}
Cuando halve(4) se ejecuta:

El entrenador (función) está trabajando con su propio jugador llamado "n" (que vale 4).

No le importa el "n" del estadio principal (que vale 10), porque tiene uno con el mismo nombre dentro de su grupo.
```

🏟️ Metáfora:

Si en la cancha principal hay un jugador llamado “n” con camiseta #10, pero en la zona de penales (una función) hay otro “n” con camiseta #4, el DT de penales solo va a ver al que tiene en su área. El otro queda invisible para él, aunque esté en el estadio.

🧠 Conclusión futbolística
Las zonas internas (funciones o bloques) pueden ver hacia afuera y usar jugadores (variables) que estén en zonas superiores.

Pero si dentro tienen un jugador con el mismo nombre, solo entrenan con ese y ignoran al resto, aunque estén más arriba.

### Ámbito anidado

Bloques y funciones pueden ser creados dentro de otros bloques y funciones, produciendo múltiples grados de localidad.

```
function zonaMedia() {
  let global = "Estadio";

function zonaMedia() {
  let medio = "Mitad de la cancha";

  function zonaAtaque() {
    let ataque = "Área de gol";
    console.log(global); // ✅ Estadio
    console.log(medio);  // ✅ Mitad de la cancha
    console.log(ataque); // ✅ Área de gol
  }

  zonaAtaque();
}
```

🧠 Aquí:

zonaAtaque() puede ver todo porque está escrita dentro de zonaMedia(), y ambas están en el bloque global.

Todo esto es léxico: no depende de cómo se llame la función, sino de cómo está organizada en el código fuente.

### Notación de declaración

🧠 Tipos de funciones en JavaScript
En JavaScript hay varias formas de definir funciones. Las más comunes son:

Declaración de función (Function Declaration)

Expresión de función (Function Expression)

Funciones flecha (Arrow Functions)

Funciones anónimas

Funciones como métodos en objetos

Funciones constructoras

Funciones de orden superior

⚽ Explicación futbolística: Cristiano como jugador versátil
Imaginemos que Cristiano Ronaldo no solo es un jugador, sino un tipo de jugador con distintos roles, formas de entrar al partido o ser llamado por el entrenador.
Cada tipo de función en JavaScript representa una forma diferente de tener a Cristiano en la cancha (tu código).

1. 🧾 Declaración de función
   js
   Copiar
   Editar
   function cristiano() {
   console.log("Cristiano mete un gol de cabeza");
   }
   🗣️ Fútbol: Es como cuando Cristiano está desde el inicio del partido, titular confirmado en la nómina. El entrenador (el motor de JavaScript) lo reconoce desde el calentamiento.

✅ Ventaja: Puedes llamarlo incluso antes de haberlo escrito en el código, gracias al hoisting.

js
Copiar
Editar
cristiano(); // Funciona aunque esté definido más abajo 2. 💼 Expresión de función
js
Copiar
Editar
const cristiano = function() {
console.log("Cristiano hace una bicicleta");
};
🗣️ Fútbol: Cristiano es suplente, pero está listo en la banca y puede entrar cuando se le asigne la camiseta (cuando se ejecute esa línea de código).

❌ No puedes usarlo antes de definirlo.

js
Copiar
Editar
cristiano(); // ❌ Error si lo llamas antes de esta línea 3. 🏹 Arrow function (función flecha)
js
Copiar
Editar
const cristiano = () => {
console.log("Cristiano hace un gol de tiro libre");
};
🗣️ Fútbol: Es Cristiano versión rápida y directa, ideal para jugadas rápidas. No tiene su propio “contexto” (no tiene su propio this, como si no usara su vestuario, sino el de su equipo).

✅ Más corta, pero no apta para todo tipo de jugadas complejas (por ejemplo, no puede usar this como otras funciones).

4. 🎭 Función anónima
   js
   Copiar
   Editar
   setTimeout(function() {
   console.log("Cristiano aparece en el minuto 90");
   }, 2000);
   🗣️ Fútbol: Cristiano entra sin nombre, como un jugador sorpresa en una jugada específica. No lo puedes llamar directamente, pero ejecuta una acción en un momento preciso.

5. 🧱 Función como método de un objeto
   js
   Copiar
   Editar
   const jugador = {
   nombre: "Cristiano",
   celebrar: function() {
   console.log("SiiiUUUUU");
   }
   };
   🗣️ Fútbol: Cristiano forma parte de un equipo (objeto), y tiene un rol específico, como “celebrar un gol”.

js
Copiar
Editar
jugador.celebrar(); // SiiiUUUUU 6. 🏗️ Función constructora
js
Copiar
Editar
function Jugador(nombre) {
this.nombre = nombre;
this.saludar = function() {
console.log("Hola, soy " + this.nombre);
};
}

const cristiano = new Jugador("Cristiano Ronaldo");
cristiano.saludar(); // Hola, soy Cristiano Ronaldo
🗣️ Fútbol: Es como un modelo de jugador, un molde para crear muchos “Cristianos” personalizados (versión Manchester, versión Madrid, versión Al-Nassr).

7. 🧠 Funciones de orden superior
   js
   Copiar
   Editar
   function ejecutarJugada(jugador) {
   jugador();
   }

ejecutarJugada(() => {
console.log("Cristiano hace un sombrero");
});
🗣️ Fútbol: Es como un entrenador que le da instrucciones a Cristiano. La función no juega, pero dirige a otras funciones (jugadores) sobre qué hacer.

✅ Resumen tipo tabla
Tipo de función Explicación técnica Cristiano en fútbol
Declaración de función Visible antes de ejecutarse (hoisting) Titular desde el inicio del partido
Expresión de función Solo existe después de definirse Suplente que entra al recibir la camiseta
Arrow function Más corta, sin this propio Cristiano rápido y directo, no entra al vestuario
Función anónima Sin nombre, usada en el momento Cristiano entra como sorpresa en una jugada
Función como método Parte de un objeto Cristiano celebrando en nombre del equipo
Función constructora Plantilla para crear objetos Fábrica de versiones de Cristiano
Función de orden superior Recibe o devuelve funciones El DT que arma jugadas con Cristiano

¿Quieres que te haga un mini juego de fútbol en código con estas funciones? Podríamos simular pases, tiros y celebraciones entre "jugadores" (funciones).

#### Funciones de flecha

En lugar de la palabra clave function, utiliza una flecha (=>).
La flecha viene después de la lista de parámetros y es seguida por el cuerpo de la función. Expresa algo así como “esta entrada (los parámetros) produce este resultado (el cuerpo)”.

Cuando solo hay un nombre de parámetro, puedes omitir los paréntesis alrededor de la lista de parámetros. Si el cuerpo es una sola expresión, en lugar de un bloque entre llaves, esa expresión será devuelta por la función. Por lo tanto, estas dos definiciones de exponente hacen lo mismo:

```
const exponente1 = (x) => { return x * x; };
const exponente2 = x => x * x;
```

```
const cuerno = () => {
  console.log("Toot");
};
```

| Tipo de función          | ¿Tiene hoisting completo? | ¿Puedes llamarla antes de definirla? |
| ------------------------ | ------------------------- | ------------------------------------ |
| Declaración (`function`) | ✅ Sí                      | ✅ Sí                                 |
| Arrow function (`const`) | ❌ No                      | ❌ No                                 |
| Function expression      | ❌ No                      | ❌ No                                 |
