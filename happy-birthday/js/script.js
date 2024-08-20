const boxCard = document.querySelector('#box-card');
const boxCard2 = document.querySelector('#box-card2');

const button_yes = document.querySelector('#btn-yes');

button_yes.addEventListener('click', function(){

    document.querySelector('#sound').play()
    
    boxCard.style = 'display: none; transition: .3s eaes-in-out;';
    boxCard2.style = 'display: block;'
})

ScrollReveal().reveal(
    '#box-card2', {
    }
)

const detail1 = document.querySelector('#detail1');
const detail2 = document.querySelector('#detail2');
const detail3 = document.querySelector('#detail3');
const detail4 = document.querySelector('#detail4');
const detail5 = document.querySelector('#detail5');
const detail6 = document.querySelector('#detail6');
const detail7 = document.querySelector('#detail7');
const detail8 = document.querySelector('#detail8');
const liveToast1 = document.querySelector('#liveToast1');
const liveToast2 = document.querySelector('#liveToast2');
const liveToast3 = document.querySelector('#liveToast3');
const liveToast4 = document.querySelector('#liveToast4');
const liveToast5 = document.querySelector('#liveToast5');
const liveToast6 = document.querySelector('#liveToast6');
const liveToast7 = document.querySelector('#liveToast7');
const liveToast8 = document.querySelector('#liveToast8');

detail1.onclick = function(){
        liveToast1.classList.add('show');

      ScrollReveal().reveal(
            '.bt1',{
                  reset:true,
                  origin:'top',
                  duration:'2000',
                  distance: '100px',
      })
}

detail2.onclick = function(){
    liveToast2.classList.add('show');

    ScrollReveal().reveal(
          '.bt2',{
                reset:true,
                origin:'top',
                duration:'2000',
                distance: '100px'
    })
}

detail3.onclick = function(){
    liveToast3.classList.add('show');

    ScrollReveal().reveal(
          '.bt3',{
                reset:true,
                origin:'top',
                duration:'2000',
                distance: '100px'
    })
}

detail4.onclick = function(){
    liveToast4.classList.add('show');

    ScrollReveal().reveal(
          '.bt4',{
                reset:true,
                origin:'top',
                duration:'2000',
                distance: '100px'
    })
}

detail5.onclick = function(){
    liveToast5.classList.add('show');

    ScrollReveal().reveal(
          '.bt5',{
                reset:true,
                origin:'top',
                duration:'2000',
                distance: '100px'
    })
}

detail6.onclick = function(){
    liveToast6.classList.add('show');

    ScrollReveal().reveal(
          '.bt6',{
                reset:true,
                origin:'top',
                duration:'2000',
                distance: '100px'
    })
}

detail7.onclick = function(){
    liveToast7.classList.add('show');

    ScrollReveal().reveal(
          '.bt7',{
                reset:true,
                origin:'top',
                duration:'2000',
                distance: '100px'
    })
}

detail8.onclick = function(){
    liveToast8.classList.add('show');

    ScrollReveal().reveal(
          '.bt8',{
                reset:true,
                origin:'top',
                duration:'2000',
                distance: '100px'
    })
}
