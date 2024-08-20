const navbrand = document.querySelector('.navbar-brand');
const skull = document.querySelector('.bxs-skull');

navbrand.addEventListener('mouseover', function(){
      skull.classList.add('bx-tada')
})

navbrand.addEventListener('mouseout', function(){
      skull.classList.remove('bx-tada')
})

const themeIcon = document.querySelector('.bxs-sun');
const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar-brand')
const body = document.body;
const cardContainer = document.querySelector('.card-container')

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
            navbar.setAttribute('data-bs-theme', 'dark')
            cardContainer.setAttribute('data-bs-theme', 'dark')
            navbarBrand.style.color = 'white';


      } else {
            themeIcon.classList.add('btn-warning');
            themeIcon.classList.remove('btn-primary');
            themeIcon.classList.remove('bxs-moon');
            themeIcon.classList.add('bxs-sun');
            body.classList.add('bg-light');
            body.classList.remove('bg-dark');
            body.classList.remove('text-light');
            body.classList.add('text-dark');
            navbar.setAttribute('data-bs-theme', 'light')
            cardContainer.setAttribute('data-bs-theme', 'light')
            navbarBrand.style.color = 'black';
      }
})