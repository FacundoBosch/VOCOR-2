let linkButton1 = document.getElementById('animation1')
let linkButton2 = document.getElementById('animation2')
let linkButton3 = document.getElementById('animation3')

linkButton1.addEventListener('click', () => {
  location.pathname = './normalPlan.html'
})

linkButton2.addEventListener('click', () => {
  location.pathname = './404NotFound.html'
})

linkButton3.addEventListener('click', () => {
  location.pathname = './404NotFound.html'
})