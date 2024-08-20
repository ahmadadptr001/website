ScrollReveal({
      reset:false,
      distance: '200px',
      duration: 2000,
      delay: 200
  });

ScrollReveal().reveal(
      '.title-heading-content, #heading-content p, #heading-content span, .card-body h6',
      {origin:'top'}
  );

  ScrollReveal().reveal(
      '.title-heading-content, #heading-content p, #heading-content span',
      {origin:'top', duration:4000}
  );

ScrollReveal().reveal(
      '#heading-content img', {origin:'right'}
)

ScrollReveal().reveal(
      '.footer .card-body p, .card-body li', {origin:'bottom', delay:'100'}
)

ScrollReveal().reveal(
      '#title-project', {
            opacity:1,
            distance: '0px',
            delay: 1,
            duration: 2000,
            
            beforeReveal: function (el){
                  el.style.opacity  ='0';
            },

            afterReveal: function (el){
                  el.style.opacity = '1';
            }
      }
)