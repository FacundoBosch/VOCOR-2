let btns = document.querySelectorAll('.plansBut')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    location.href = 'http://localhost:5500/404NotFound.html'
  })
})