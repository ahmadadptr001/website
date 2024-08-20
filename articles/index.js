const body = document.body;
const themeIcon = document.querySelector('.bxs-sun');
const navbar = document.querySelector('.navbar');
const skull = document.querySelector('.bxs-skull');
const navbarBrand = document.querySelector('.navbar-brand');
const card = document.querySelector('.card');
const darkButton = document.querySelector('.card-offcanvas .btn-outline-dark');
const accordionArtikel = document.querySelector('#accordionArtikel');
const accordion2 = document.querySelector('.accordion2');
const github = document.querySelectorAll('.--github');
const vidoeAcor1 = document.querySelector('#videoGitar1');
const vidoeAcor2 = document.querySelector('#videoGitar2');
const bagsaVideo1 = document.querySelector('#bagasVideo1');
const bagsaVideo2 = document.querySelector('#bagasVideo2');
const bagsaVideoBtn = document.querySelector('#bagasVideoBtn');


function playingbagas1(){
      bagsaVideo1.play()
}

function playingbagas2(){
      bagsaVideo2.play()
}

function playing1(){
      if (document.querySelector('.detailAuthor1').getAttribute('aria-expanded') == 'false'){
            vidoeAcor1.pause()
      } else {
            vidoeAcor1.play()
      }
}
 
function playing2(){
      if (document.querySelector('.detailAuthor2').getAttribute('aria-expanded') == 'false'){
            vidoeAcor2.pause()
      } else {
            vidoeAcor2.play()
      }
}


// document.querySelector('.detailAuthor2').addEventListener('click', function(){
//       if(btnAcor1.getAttribute('aria-expanded') == 'true'){
//             vidoeAcor1.play()
//             vidoeAcor2.play()
//       } else {
//             vidoeAcor1.pause()
//             vidoeAcor2.pause()
//       }
// })

// document.querySelector('.detailAuthor1').addEventListener('click', function(){
//       if(btnAcor2.getAttribute('aria-expanded') == 'true'){
//             vidoeAcor1.play()
//             vidoeAcor2.play()
//       } else {
//             vidoeAcor1.pause()
//             vidoeAcor2.pause()
//       }
// })

navbarBrand.onmouseover = function(){
      skull.classList.add('bx-tada');
      if(themeIcon.classList[10] == 'activate-icon'){
            navbarBrand.style.color = 'rgb(215, 215, 215)';
      } else {
            navbarBrand.style.color = 'rgb(40,  40, 40)';
      }
}

navbarBrand.onmouseout = function(){
      skull.classList.remove('bx-tada')

      if(themeIcon.classList[10] == 'activate-icon'){
            navbarBrand.style.color = 'rgb(255, 255, 255)';
      } else {
            navbarBrand.style.color = 'rgb(0, 0, 0)';
      }
}

themeIcon.addEventListener('click', function(){
      themeIcon.classList.toggle('activate-icon');
      
      if (themeIcon.classList[12] == 'activate-icon'){
            themeIcon.classList.remove('btn-warning');
            themeIcon.classList.add('btn-primary');
            themeIcon.classList.add('bxs-moon');
            themeIcon.classList.remove('bxs-sun');
            body.classList.remove('bg-light');
            body.classList.add('bg-dark');
            body.classList.add('text-light');
            body.classList.remove('text-dark');
            navbar.setAttribute('data-bs-theme', 'dark');
            card.setAttribute('data-bs-theme', 'dark');
            card.classList.add('bg-dark');
            card.classList.remove('bg-light');
            navbarBrand.style.color = 'white';
            darkButton.classList.remove('btn-outline-dark');
            darkButton.classList.add('btn-outline-light');
            accordionArtikel.setAttribute('data-bs-theme', 'dark')
            accordion2.setAttribute('data-bs-theme', 'dark')
            github[0].classList.remove('btn-outline-dark');
            github[0].classList.add('btn-outline-light');
            github[1].classList.remove('btn-outline-dark');
            github[1].classList.add('btn-outline-light');


      } else {
            themeIcon.classList.add('btn-warning');
            themeIcon.classList.remove('btn-primary');
            themeIcon.classList.remove('bxs-moon');
            themeIcon.classList.add('bxs-sun');
            body.classList.add('bg-light');
            body.classList.remove('bg-dark');
            body.classList.remove('text-light');
            body.classList.add('text-dark');
            navbar.setAttribute('data-bs-theme', 'light');
            card.setAttribute('data-bs-theme', 'light');
            card.classList.add('bg-light');
            card.classList.remove('bg-dark');
            navbarBrand.style.color = 'black';
            darkButton.classList.remove('btn-outline-light');
            darkButton.classList.add('btn-outline-dark')
            accordionArtikel.setAttribute('data-bs-theme', 'light')
            accordion2.setAttribute('data-bs-theme', 'light')
            github[0].classList.remove('btn-outline-light');
            github[0].classList.add('btn-outline-dark');
            github[1].classList.remove('btn-outline-light');
            github[1].classList.add('btn-outline-dark');
      }
})

// khusus scroll reveal
ScrollReveal({
      reset: true,
      duration: '2000',
      distance: '0px',
})

      // khusus untuk teks Artikel🎈
      ScrollReveal().reveal(
            '.artikel-A,  .artikel-r, .artikel-t, .artikel-i, .artikel-k, .artikel-e,.artikel-l, .bxs-balloon', {
                  distance: '1000px',
                  origin: 'top',
            }
      )

      ScrollReveal().reveal('.artikel-A', {delay:'300'})
      ScrollReveal().reveal('.artikel-r', {delay:'500'})
      ScrollReveal().reveal('.artikel-t', {delay:'700'})
      ScrollReveal().reveal('.artikel-i', {delay:'900'})
      ScrollReveal().reveal('.artikel-k', {delay:'1200'})
      ScrollReveal().reveal('.artikel-e', {delay:'1500'})
      ScrollReveal().reveal('.artikel-l', {delay:'1800'})
      ScrollReveal().reveal('.bxs-balloon', {delay:'2100'})

      // khusus untuk button
      ScrollReveal().reveal(
            '.item1, .item2, .item3, .item4, .item5, .item6',{
                  reset: false,
                  distance: '170px',
                  origin: 'bottom'
            }
      )

      ScrollReveal().reveal('.item1', {delay: '500'})
      ScrollReveal().reveal('.item2', {delay: '1100'})
      ScrollReveal().reveal('.item3', {delay: '700'})
      ScrollReveal().reveal('.item4', {delay: '1500'})
      ScrollReveal().reveal('.item5', {delay: '1300'})
      ScrollReveal().reveal('.item6', {delay: '900'})







// khusus animasi teks mengetik

let n = 0;
let delete_ = false;

text = 'My thoughts on web development and a look at my personal life'
box_text = document.querySelector('.text-content-article')

function animasi_mengetik() {
      if (!delete_ && n < text.length) {
            box_text.innerHTML += text.charAt(n);
            n++;
            setTimeout(animasi_mengetik, 80);

      } else if (delete_ && n > 0) {
            box_text.innerHTML = '&ThinSpace; ';
            box_text.innerHTML += text.substring(0, n - 1);
            n--;
            setTimeout(animasi_mengetik, 80);

      } else if (n === text.length) {
            delete_ = true;
            setTimeout(animasi_mengetik, 500);

      } else if (n === 0) {
            delete_ = false;
            setTimeout(animasi_mengetik, 500);

      }
}

animasi_mengetik()