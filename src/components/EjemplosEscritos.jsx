import './EjemplosEscritos.css'

export function EjemplosEscritos () {
  return (
    <main>
      <section className='ejemplos'>
        <h2 id='ejemplosEscritos'>Ejemplos</h2>
        <h3>Ejemplos variados a mano:</h3>
        <article className='ej-escrito'>
          <div>
            <img src='img/ronald-tarea.png' alt='tarea de Ronald' />
            <span>Temperatura en función del tiempo</span>
          </div>
          <div>
            <img src='img/funcion-valor-absoluto.jpeg' alt='Función de valor absoluto' />
            <span>Función de segundo grado</span>
          </div>
          <div>
            <img src='img/funcion-valor-absoluto.jpeg' alt='Ejercicio con la prueba de la línea vertical' />
            <span>Ejercicio con la prueba de la línea vertical</span>
          </div>
        </article>
        <h3>Ejemplos variados en imágenes:</h3>
        <article className='ej-img'>
          <div>
            <img src='img/caida-libre.png' alt='Imágen de ejemplo de caída libre' />
            <span>Ejemplo de caída libre en el que se podemos encontrar una función</span>
          </div>
          <div>
            <img src='https://matemovil.com/wp-content/uploads/2017/05/graficar-funciones-b%C3%A1sicas.jpg' alt='Imágen de ejemplo de una función cuadrática' />
            <span>Funciones cuadráticas</span>
          </div>
          <div>
            <img src='https://image.slidesharecdn.com/funcionesexponenciales-120527161112-phpapp01/85/funciones-exponenciales-7-320.jpg?cb=1665810426' alt='Ejemplo función exponencial' />
            <span>Funciónes exponenciales</span>
          </div>
          <div>
            <img src='https://totumat.files.wordpress.com/2019/12/2-3-1.png?w=695' alt='Función algebráica de tercer grado' />
            <span>Función algebráica de tercer grado</span>
          </div>
        </article>
      </section>
    </main>
  )
}
