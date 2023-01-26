const btnAnimation1 = document.getElementById('btnPlan1')
const btnAnimation2 = document.getElementById('btnPlan2')
const btnAnimation3 = document.getElementById('btnPlan3')

const cargarImagen = (entradas, observador) => {

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
      console.log("viewport");
			entrada.target.classList.add('visible')
		}
	})
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px 250px 0px',
	threshold: 1.0
})

observador.observe(btnAnimation1)
observador.observe(btnAnimation2)
observador.observe(btnAnimation3)