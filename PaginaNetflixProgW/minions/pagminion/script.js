
const botonReproducir = document.getElementById('botonReproducir');
const videoContenedor = document.getElementById('videoContenedor');
const miVideo = document.getElementById('miVideo');
const videoSource = document.getElementById('videoSource');


const rutaDelVideo = 'videos/miVideo.mp4'; 


botonReproducir.addEventListener('click', () => {
    
    videoSource.src = rutaDelVideo;
    
    
    videoContenedor.style.display = 'block';
    
    
    miVideo.load();
    miVideo.play(); 
});


