export function Funciones () {
  return (
    <main>
      <section>
        <article>
          <h2 id='function'>¿Qué es una función?</h2>
          <p>Una función es una relación entre dos conjuntos de números, en la que cada elemento del primer conjunto está relacionado con un único elemento del segundo conjunto.</p>
          <img src='img/Que-es-una-funcion.png' alt='Imagen de ejemplo de la definición de función' />
        </article>
        <article>
          <h2 id='compone'>¿Cómo se compone una función?</h2>
          <h3>Una función se compone de tres partes:</h3>
          <ul>
            <li>
              <span>Dominio</span>
              <p>El dominio de una función es el conjunto de todos los posibles valores de entrada (también conocidos como valores de variable independiente) para los cuales la función está definida y produce un resultado único. En otras palabras, es el conjunto de valores que podemos "alimentar" a la función y obtener una respuesta válida.</p>
              <img src='img/dominio.png' alt='Ejemplo del dominio' />
            </li>
            <li>
              <span>Rango</span>
              <p>El rango de una función es el conjunto de todos los valores de salida que puede producir la función al ser evaluada en diferentes valores del dominio. En otras palabras, es el conjunto de valores que la función puede "devolver" como resultado.
              </p>
              <img src='img/rango.png' />
            </li>
          </ul>
        </article>
        <article>
          <h2 id='tipos'>Tipos de funciones</h2>
          <p>Las funciones se pueden clasificar en dos grandes grupos:</p>
          <ul>
            <li>
              <strong className="strong-elem">Funciones elementales</strong>
              <p>Una función elemental es una función que se puede expresar utilizando un número finito de operaciones aritméticas básicas (suma, resta, multiplicación, división), funciones trigonométricas (seno, coseno, tangente), funciones exponenciales (elevado a una potencia) y funciones logarítmicas (logaritmo natural o de base 10).</p>
            </li>
            <li>
              <strong className="strong-elem">Funciones compuestas</strong>
              <p>Una función compuesta es una función que se obtiene al aplicar una función a los resultados de otra función. En otras palabras, es una función que está compuesta por dos o más funciones.</p>
            </li>
          </ul>
        </article>
        <article>
          <h2>Prueba de la línea vertical</h2>
          <p>La prueba de la línea vertical es una prueba que se utiliza para determinar si una función es o no es inyectiva. Se basa en la idea de que si una función es inyectiva, entonces no puede haber dos valores de la variable independiente que mapeen al mismo valor de la variable dependiente. Esto se puede demostrar mediante la prueba de la línea vertical.</p>
          <img src='img/prueba-linea-vertical.png' alt='Prueba de la línea vertical' />
        </article>
      </section>
      <footer>
        <h2 id='integrantes'>Integrantes del grupo</h2>
        <ul>
          <li><p>Juan Valencia</p></li>
          <li><p>Ronald Squea</p></li>
          <li><p>Geraldine Ocampo</p></li>
          <li><p>Alex García</p></li>
        </ul>
      </footer>
    </main>
  )
}
