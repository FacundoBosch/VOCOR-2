const Animation1 = document.getElementById('animation1')
const Animation2 = document.getElementById('animation2')
const Animation3 = document.getElementById('animation3')

const cargarImagen = (entradas, observador) => {

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
      console.log('visible');
			entrada.target.classList.add('visible')
		}
	})
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px 250px 0px',
	threshold: 1.0
})

observador.observe(Animation1)
observador.observe(Animation2)
observador.observe(Animation3)