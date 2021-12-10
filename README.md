[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6420795&assignment_repo_type=AssignmentRepo)
# Proyecto DIW - DWECL: Portfolio
## Eduardo Martínez Romero
### Diseño de Interfaces Web
### Desarrollo Web en Entorno Cliente
#### 2ºDAW - IES Doñana
***

## Índice
1. [Descripción](#descripcion)
2. [Prototipo](#prototipo)
3. [Modificaciones a la guía de estilos](#modificaciones)
4. [Recursos](#recursos)

## 1. Descripción<a id="descripcion"></a>
¡Hola de nuevo! Continuando los pasos realizado en la primera entrega del proyecto, ahora se nos encomienda la tarea de codificar nuestro prototipo usando los conocimientos en CSS3 estudiados a lo largo de este trimestre. Personalmente el comienzo se me hizo titánico al estar poco familiarizado con el lenguaje HTML. De hecho describir esta fase de incertidumbre servirá para justificar la toma de decisiones realizada para organizar y aplicar el estilo a mi portfolio. Creo que el resultado final respeta y es fiel a su prototipo en prácticamente cualquier aspecto, aunque por supuesto queda hay mucho espacio para la mejora. Vamos a ver un poco más a fondo algunos aspectos respecto a la codificación.

### 1.1. Diversificar los elementos del proyecto
Mi mayor preocupación se centraba en el correcto uso de los métodos para seleccionar los elementos del documento. El objetivo era poder reutilizar la mayor cantidad de estilo posible, pero desconocía que tipo de "gazapos" podía encontrar por el camino, o hasta que punto reutilizar el código podía dificultar la implementación. Por suerte, desde el comienzo del prototipado traté de hacer que el diseño se ciñiese a una serie de patrones y medidas, con la idea de armonizar el estilo, y que este fuese homogéneo en todo el documento. Trabajar de este modo, junto al uso de componentes en Figma me facilitaron bocetar nuna idea de que elementos son clases potenciales y cuáles tienen más sentido seleccionarlos como identificadores. A pesar de todo creo que se puede hacer mucho más eficiente de como yo lo he planteado, sin embargo estoy contento con el resultado general.

### 1.2. La semántica de las etiquetas
Aunque no he he realizado un uso muy extenso de ellas, y predominan las etiquetas genéricas, he organizado los apartados del portfolio en secciones usando, valga la redundancia, la etiqueta `<section>`. Otros elementos, como las cabeceras, las citas, o los menús de navegación han sido definidos usando etiquetas semánticas, a las que luego he redefinido su estilo para que se adapten al proyecto.

### 1.3. La organización de los ficheros
He continuado llevando la organización de los ficheros de una forma similar a como realicé la primera entrega. Los ficheros html se encuentran en la raíz, tal y como se especifica en los rquisitos de la entrega, al igual que he seguido respetando la convención para nombrar a los ficheros en minúsculas y separados por guiónes en caso de contener más de una palabra.

La carpeta `mmedia` actua de índice para todo el contenido multimedia utilizado para la codificación del proyecto. En ella encontraremos las imágenes y la iconografía que encontraremos en el documento web.

### 1.4. Respecto al diseño responsivo...
Al principio pensé que este sería el apartado más flojo de toda la entrega, y no es que sea de los mejores, pero ha sido relativamente fácil acomodar todos los elementos para dispositivos con pantallas más pequeñas. Gracias a la extensión Live Server de VS Code he podido ver mi página tanto en mi móvil como en mi tablet, y en ambos escenarios se ve bastante bien.

### 1.5 Validación de los ficheros HTML y CSS
Después de codificar todo el proyectpo y quedar satisfecho con el resultado realicé la validación de los documentos.

#### HTML
Tras la primera comprobación, me alegró ver que sólo había un par de errores:
- Inserte un elemento `<li>` dentro de un elemento `<a>` cuando debía ser al contrario.
- Dupliqué por error el nombre del id `testimonio-autor`. Lo resolví convirtiéndolo en una clase, que reutilizo para los dos testimonios del portfolio.
- Usaba el atributo `frameborder` en el elemento `<iframe>` que contiene el vídeo. Ahora es una propiedad CSS.
- Usé cierre abreviado en las etiquetas `<label>`. Aunque estén vacíos, no permite cerrarse usando sólo `/` al final de la etiqueta de apertura.

Todos estos errores han sido corregidos.
> Hay una serie de advertencias por no usar cabeceras como primer elemento hijo de un elemento `<section>`. Técnicamente es cierto, el primer hijo es un `<div>` que si contiene la cabecera. No he realizado mosdificaciones.
### CSS
El CSS fue incluso más fácil de validar. Tan sólo había errores (o advertencias, no recuerdo) debido a que usaba el método `grayscale` con argumento vacío, cuando es obligatorio especificarle un valor(i.e: `grayscale(1)`). Por último, en el elemento `textarea` tenía aplicada la propiedad `border` con el mismo color que el `background`. Esto estaba así porque por defecto textarea tiene borde. Lo he resuelto dandole el valor `0`.

## 2. Prototipo<a id="prototipo"></a>
Para revisar como es mi prototipo dejo aquí el [enlace al prototipo en Figma.](https://www.figma.com/file/Jx8TdgBvmOWf6QPgR7NAmA/portfolio)

## 3. Modificaciones a la guía de estilos<a id="modificaciones"></a>
### 3.1 Colores
He incluido alguna variedad más de gris para el texto y sombreado del menú desplegable, y un color complementario para advertir de errores de validación en las entradas del formulario.

|HEX|Denominación|Descripción
|-|-|-
|<span style="background: #A6723C;">**#A6723C**</span>|Dark Gold|Color complementario del Royal Blue (<span style="background: #3B6EA5;">**#3B6EA5**</span>) ya utilizado en el proyecto. Usado para advertir de errores de valiación en el formulario de contacto.
|<span style="background: #FEFEFE; color: #000">**#FEFEFE**</span>|White|Tono de blanco usado en el fondo del menú desplegable. Ligeramente más claro que el usado en las tarjetas (#DADADA), para mejorar el contraste del menú sobre éstas.
|<span style="background: #272727; color: #fff">**#272727**</span>|Charleston Green|Tono de gris usado en el texto del menú desplegable.
|<span style="background: #666; color: #fff">**#666**</span>|Granite Grey|Tono de gris usado para sombrear el menú desplegable.

## 4. Recursos<a id="recursos"></a>

- [W3Schools](https://www.w3schools.com/) - Sitio web educativo, orientado como plataforma de aprendizaje, así como referencia y consulta sobre diversos lenguajes de marcas y programación.
- [MDN](https://developer.mozilla.org/) (Mozilla Developer Network) - Sitio web ofrecido por la fundación Mozilla y mantenido por desarrolladores voluntarios, enfocado en ofrecer resursos y material de referencia sobre las tecnologías enfocadas al desarrollo web.
- [StackOverflow](https://stackoverflow.com/) - Sitio web basado en un esquema de preguntas-respuestas, donde los usuarios realizan todo tipo de cuestiones, sobre prácticamente cualquier aspecto referente al desarrollo.
- [Geeks for Geeks](https://www.geeksforgeeks.org/) -  Sitio web muy similar a W3Schools, el cual también ofrece gran cantidad de recursos y ejemplos de uso de multitud de caracteristicas de los leguajes orientados al desarrollo web.

- [DuckDuckGo](https://duckduckgo.com/) - Motor de búsqueda enfocado en la privacidad. Usado para encontrar documentación útil para codificar el estilo.

- [Color-name](https://www.color-name.com/) - Web que puede ofrece una denominación en lenguage humano a partir de un color pasado como código hexadecimal.

- Tailwind: https://tailwindcss.com/docs
- W3C CSS Validator: https://jigsaw.w3.org/css-validator/
- W3C HTML Validator: https://validator.w3.org/
