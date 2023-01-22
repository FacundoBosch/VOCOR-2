const maletin1 = document.getElementById('maletin1')
const maletin2 = document.getElementById('maletin2')
const container = document.getElementById('container')
const loader = document.getElementById('loader')

container.style.display = 'none'

document.addEventListener('DOMContentLoaded', () => {
  container.style.display = 'block'
  loader.style.display = 'none'
  maletin1.classList.add('maletin1')
  maletin2.classList.add('maletin2')
})

