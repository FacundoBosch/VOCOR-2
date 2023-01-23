const btn1 = document.getElementById('registerBut')
const btn2 = document.getElementById('loginBut')
const btn3 = document.getElementById('userBut')
const userDisplay = document.getElementById('userContainer')
const exit = document.getElementById('exit')

btn1.addEventListener('click', () => {
  btn1.style.display = 'none'
  btn2.style.display = 'none'

  btn3.style.display = 'flex'
})

btn2.addEventListener('click', () => {
  btn1.style.display = 'none'
  btn2.style.display = 'none'

  btn3.style.display = 'flex'
})

btn3.addEventListener('click', () => {
  userDisplay.classList.remove('containerAnimationOut')
  userDisplay.style.display = 'flex'
  userDisplay.classList.add('containerAnimationIn')
  document.body.style.overflow = 'hidden'
})

exit.addEventListener('click', () => {
  userDisplay.classList.remove('containerAnimationIn')
  userDisplay.classList.add('containerAnimationOut')
  setTimeout(function(){
    userDisplay.style.display = 'none'
    document.body.style.overflow = 'visible'
  }, 500)
})