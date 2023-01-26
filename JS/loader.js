const container = document.getElementById('container')
const loader = document.getElementById('loader')

container.style.display = 'none'
document.body.style.overflow = 'hidden'

document.addEventListener('DOMContentLoaded', () => {
  container.style.display = 'block'
  loader.style.display = 'none'
  document.body.style.overflow = 'visible'
})