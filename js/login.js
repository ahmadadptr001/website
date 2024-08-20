const  key = document.querySelector('#key')
key.onclick = function(){
      if (document.getElementById('pwd').type == 'text'){
            document.getElementById('pwd').type = 'password';
            key.classList.add('bx-hide'); key.classList.remove('bx-show')
      } else {
            document.getElementById('pwd').type = 'text';
            key.classList.add('bx-show'); key.classList.remove('bx-hide')
      }
}

ScrollReveal({
      reset: true,
      distance: '70px',
      duration: 1500
})

ScrollReveal().reveal(
      '#back-to-index', {
            origin: 'left',
            duration: 2000,
      }
)
ScrollReveal().reveal(
      '.card', {
            origin: 'left',
            delay: 700
      }
)
ScrollReveal().reveal(
      '.card-head h2', {
            origin: 'bottom',
            delay: 1000
      }
)
ScrollReveal().reveal(
      '.card-head hr', {
            origin: 'bottom',
            delay: 1300
      }
)
ScrollReveal().reveal(
      '.box-email', {
            origin: 'bottom',
            delay: 1900
      }
)
ScrollReveal().reveal(
      '.bxl-gmail', {
            origin: 'right',
            delay: 2200
      }
)
ScrollReveal().reveal(
      '.box-pwd', {
            origin: 'bottom',
            delay: 2300
      }
)
ScrollReveal().reveal(
      '.bx-show, .bx-hide', {
            origin: 'right',
            delay: 2600
      }
)
ScrollReveal().reveal(
      '#btn-submit', {
            origin: 'bottom',
            delay: 2900
      }
)
ScrollReveal().reveal(
      '#back-to-index2', {
            origin: 'bottom',
            delay: 3100
      }
)
ScrollReveal().reveal(
      '#text-or', {
            origin: 'bottom',
            delay: 3300
      }
)
ScrollReveal().reveal(
      '#google-facebook', {
            origin: 'bottom',
            delay: 3600
      }
)