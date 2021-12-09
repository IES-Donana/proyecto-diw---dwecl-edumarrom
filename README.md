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
Este será el apartado que más va a flojear de toda esta entrega. Mi mala organización me ha llevado a trabajar contrareloj y si quería que la versión de escritorio estuviese lista tenía que dedicar todo el tiempo a ella. Me hubiese gustado poder dedicarle su tiempo, darle sus vueltas y aprender realmente a manejarme con los puntos de ruptura, pero no ha podido ser así.
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
