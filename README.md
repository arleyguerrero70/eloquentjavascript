# Eloquent Javascript en español

Después de su adopción fuera de Netscape, se escribió un documento estándar para describir la forma en que debería funcionar el lenguaje JavaScript para que las diversas piezas de software que afirmaban soportar JavaScript pudieran asegurarse de que realmente proporcionaban el mismo lenguaje. Esto se llama el estándar ECMAScript, según la organización Ecma International que llevó a cabo la estandarización. En la práctica, los términos ECMAScript y JavaScript se pueden usar indistintamente, son dos nombres para el mismo lenguaje.

JavaScript es ridículamente liberal en lo que permite. La idea detrás de este diseño era que haría la programación en JavaScript más fácil para principiantes. En realidad, esto hace que encontrar problemas en tus programas sea más difícil porque el sistema no te los señalará.

Ha habido varias versiones de JavaScript. La versión ECMAScript 3 fue la versión ampliamente soportada durante el ascenso al dominio de JavaScript, aproximadamente entre 2000 y 2010. Durante este tiempo, se estaba trabajando en una versión ambiciosa 4, la cual planeaba una serie de mejoras y extensiones radicales al lenguaje. Cambiar un lenguaje vivo y ampliamente utilizado de esa manera resultó ser políticamente difícil, y el trabajo en la versión 4 fue abandonado en 2008. Una versión 5, mucho menos ambiciosa, que solo realizaba algunas mejoras no controversiales, salió en 2009. En 2015, salió la versión 6, una actualización importante que incluía algunas de las ideas previstas para la versión 4. Desde entonces, hemos tenido nuevas actualizaciones pequeñas cada año.

Los navegadores web no son las únicas plataformas en las que se utiliza JavaScript. Algunas bases de datos, como MongoDB y CouchDB, utilizan JavaScript como su lenguaje de secuencias de comandos y consulta. Varias plataformas para programación de escritorio y servidores, especialmente el proyecto Node.js (el tema del Capítulo 20), proporcionan un entorno para programar en JavaScript fuera del navegador.



## Frases a tener en cuenta

### Introducción

- Programar es fundamentalmente tedioso y frustrante.

- Es una forma de hacer que tu herramienta informática haga cosas que antes no podía hacer. Además, se convierte en un maravilloso juego de resolución de acertijos y pensamiento abstracto.

- Depende de ti hacer el esfuerzo necesario. Cuando te cueste seguir el libro, no saques conclusiones precipitadas sobre tus propias capacidades. Estás bien, simplemente necesitas seguir adelante. Tómate un descanso, vuelve a leer algo de material y asegúrate de leer y comprender los programas de ejemplo y los ejercicios. Aprender es un trabajo duro, pero todo lo que aprendas será tuyo y facilitará aún más el aprendizaje futuro.

- La habilidad de programar es la habilidad de construir programas que no te confundan a ti mismo. Los mejores programas son aquellos que logran hacer algo interesante mientras siguen siendo fáciles de entender.

Puedes encontrar soluciones completas a los ejercicios en línea en https://eloquentjavascript.net/code. Si deseas aprender algo de los ejercicios, te recomiendo mirar las soluciones solo después de haber resuelto el ejercicio, o al menos después de haberlo intentado lo suficiente como para tener un ligero dolor de cabeza.


## Datos curiosos:

### Capítulo 2:

Una sola instrucción let puede definir múltiples enlaces. Las definiciones deben estar separadas por comas:

```
let one = 1, two = 2;
console.log(one + two);
// → 3
```

### Capítulo 3:

"Tenemos que introducir nuevas palabras para evitar la verbosidad excesiva."
"El dilema de velocidad versus elegancia es interesante. Se puede ver como una especie de continuo entre la compatibilidad con los humanos y las máquinas. Casi cualquier programa puede ser acelerado haciendo que sea más extenso y complicado. El programador debe encontrar un equilibrio apropiado.
Por lo tanto, generalmente deberías comenzar escribiendo algo que sea correcto y fácil de entender. Si te preocupa que sea demasiado lento—lo cual suele ser raro, ya que la mayoría del código simplemente no se ejecuta lo suficiente como para tomar una cantidad significativa de tiempo—puedes medir después y mejorarlo si es necesario."