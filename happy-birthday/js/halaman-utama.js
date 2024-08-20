(function (){
      document.body.addEventListener('keydown', (e)=>{
            onlyCtrlDown = (e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey;
            if ((e.key == 'c' || e.key == 'C') && onlyCtrlDown){
                  console.log(e.key)
                  document.body.addEventListener('keydown', (e)=>{
                        onlyCtrlDown = (e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey;
                        if ((e.key == 'i' || e.key == 'I') && onlyCtrlDown){
                              console.log(e.key)
                              document.body.addEventListener('keydown', (e)=>{
                                    onlyCtrlDown = (e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey;
                                    if ((e.key == 'n' || e.key == 'N') && onlyCtrlDown){
                                          console.log(e.key)
                                          document.body.addEventListener('keydown', (e)=>{
                                                onlyCtrlDown = (e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey;
                                                if ((e.key == 't' || e.key == 'T') && onlyCtrlDown){
                                                      console.log(e.key)
                                                      document.body.addEventListener('keydown', (e)=>{
                                                            onlyCtrlDown = (e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey;
                                                            if ((e.key == 'a' || e.key == 'A') && onlyCtrlDown){
                                                                  console.log(e.key)
                                                                  alert('I love u too  -by Ahmadptr-')
                                                                  const OfffCanvas = document.querySelector('.offcanvas-end');
                                                                  OfffCanvas.classList.remove('hide');
                                                                  OfffCanvas.classList.add('show') 
                                                                  document.querySelector('#yada').play()
                                                            }
                                                      })
                                                }
                                          })
                                    }
                              })
                        }
                  })
            }
      })
})()

function btnLiveToast() {
                  
      const toast = document.querySelector('.toast');
      toast.classList.remove('hide'); toast.classList.add('show')
      
      ScrollReveal().reveal('.toast',{distance: '0px',origin:'left', duration:'1000', reset:'false'})
      let audion = document.createElement('div')
      audion.innerHTML = `<audio src='song/klik.mp3' autoplay></audio>`;
      
      document.body.appendChild(audion)

}

document.querySelector('.offcanvas-header .btn-close').onclick = function(){
      const OfffCanvas = document.querySelector('.offcanvas-end');
      OfffCanvas.classList.remove('show'); OfffCanvas.classList.add('hide')
}

ScrollReveal({
      reset:true,
      distance:'170px',
      duration:'2000',
      origin: 'top'
})

const btnGaleri = document.getElementById('kado-galeri');

btnGaleri.addEventListener('click', function(){
      if (document.querySelector('.galery-container') == undefined){
            let galeriBox = document.createElement('div');
            galeriBox.classList.add('container-fluid');
            galeriBox.classList.add('galery-container');
            galeriBox.innerHTML = `
            
            <div class='row'>
                  <div class='col-12 text-end'>
                        <button class='btn btn-danger btnBack'><i class='bx bx-x'></i></button>
                  </div>
            </div>
            <div id='test-card' class='card border-0 col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
                  <div class='card-body p-0'>
                        <div id='cGaleri' class='carousel slide' data-bs-ride='carousel'>
                              <div class='carousel-indicators'>
                                    <button type='button' data-bs-target='#cGaleri' data-bs-slide-to='0' aria-current='true' aria-label='1' class='active'></button>
                                    <button type='button' data-bs-target='#cGaleri' data-bs-slide-to='1' aria-current='true' aria-label='2'></button>
                                    <button type='button' data-bs-target='#cGaleri' data-bs-slide-to='2' aria-current='true' aria-label='3'></button>
                                    <button type='button' data-bs-target='#cGaleri' data-bs-slide-to='3' aria-current='true' aria-label='4'></button>
                                    <button type='button' data-bs-target='#cGaleri' data-bs-slide-to='4' aria-current='true' aria-label='5'></button>
                              </div>
                              <div class='carousel-inner'>
                                    <div class='carousel-item active' data-bs-interval='2000'>
                                          <img src='img/toko-swalayan.jpg'>
                                          <div class='carousel-caption'>
                                                <h5 class='mt-2'> Toko Swalayan </h5>
                                                <p>
                                                            Tempat belanja dengan harga terjangkau dan diskon 50% untuk
                                                            semua pelanggan. Pastikan anda gercep karena kesempatan ini terbatas
                                                            bagi 10 pelanggan pertama akan mendapatkan diskon 75% guys. Wadidaw
                                                            saya akan membelanjakan semua uang saya demi bisa belanja guys.
                                                </p>
                                          </div>
                                    </div>

                                    <div class='carousel-item' data-bs-interval='5000'>
                                          <img src="img/anime-girl (1).gif">
                                          <p class='carousel-caption opacity-100'>
                                                <button onclick="btnLiveToast()" class='btn btn-danger text-center' style="font-size: .9rem;"><i class='bx bx-error text-light'> Anda kena prank!!!</i></button>
                                                <div class="position-fixed top-0 start-0 p-3" style="z-index: 11;">
                                                <div id="liveToast" class="toast hide" data-bs-theme="light" role="alert" aria-live="assertive" aria-atomic="true">
                                                      <div class="toast-header">
                                                            <img src="../happy-birthday/img/anime-girl (1).gif" class="rounded-circle me-2" style="width: 30px; height: 30px;">
                                                            <strong class="me-auto">Ayang</strong>
                                                            <small>11 menit yang lalu</small>
                                                            <button class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                      </div>

                                                      <div class="toast-body">
                                                            <span style='font-size: .7rem;'>
                                                                  Sayaaaang rinduuuuuuuuuuuuu <img src="img/kawaii-love.gif" style='width: 30px; height: 30px;'> 
                                                            </span>
                                                            <hr>
                                                            <span style='font-size: .7rem;'>
                                                                  <mark>Tombol Rahasia</mark> 
                                                                  <div class='mt-2'>
                                                                        <kbd class="text-light">CTRL</kbd> + 
                                                                        <kbd class="text-light">ALT</kbd> +
                                                                        <kbd class="text-light">C</kbd> +
                                                                        <kbd class="text-light">I</kbd> +
                                                                        <kbd class="text-light">N</kbd> +
                                                                        <kbd class="text-light">T</kbd> +
                                                                        <kbd class="text-light">A</kbd>
                                                                  </div>
                                                                  <div style='font-size: .68rem;' class='mt-2'> atau tekan </div>
                                                                  <div class='mb-2'> teks <q>love u more..</q> pada kartu ucapan</div> 
                                                            <span>
                                                      </div>
                                                </div>
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
            
            `

            

            document.body.appendChild(galeriBox)
            ScrollReveal().reveal(document.querySelector('.galery-container'))

            const btnBack = document.querySelector('.btnBack')
            btnBack.onclick = function(){
                  document.querySelector('.galery-container').style.display = 'none';
            }

      } else {
            const galeriBox = document.querySelector('.galery-container');
            galeriBox.style = 'display: block;';
      }

})


ScrollReveal().reveal(document.querySelector('.row'),{distance:'0'})