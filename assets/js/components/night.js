function dark(){ 
    document.addEventListener('DOMContentLoaded', function() {
        const cambiarEstiloBtn = document.getElementById('night');
        const body = document.body;
        const products = document.querySelector('.products__title');
        const footer = document.querySelector('.footer');
        const h3 = document.querySelector('.footer__title');
        const redesSociales = document.querySelector('.h32');
        
    
        cambiarEstiloBtn.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            products.classList.toggle('change-color');
            footer.classList.toggle('change-black');
            h3.classList.toggle('change-black');
            redesSociales.classList.toggle('change-black');
           
            

           
        
        });
    });
    
}
export default dark