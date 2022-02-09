window.onload = () =>{
    
    document.querySelectorAll('.img-work .overlay').forEach((el) => {
        el.addEventListener('click', function (ev) {
            ev.stopPropagation();
            this.parentNode.classList.add('active');
        });
    });
    
    document.querySelectorAll('.img-work ').forEach((el) => {
        el.addEventListener('click', function (ev) {
            this.classList.remove('active');
        });
    });
    
    
    
    window.addEventListener("scroll", function(){
        let animacion = document.getElementById("animado");
        let posicionObj1 = animacion.getBoundingClientRect().top;
        let tamañoDePantalla = window.innerHeight/2.5;
    
        if(posicionObj1 < tamañoDePantalla){
            animado.style.opacity = 1;
    
        }else{
            animado.style.opacity = 0;
        }
    });

    document.getElementById("open-popup-btn").addEventListener("click",function(){
        document.getElementsByClassName("popup")[0].classList.add("active");
      });
       
      document.getElementById("open-popup-btn2").addEventListener("click",function(){
        document.getElementsByClassName("popup")[0].classList.add("active");
      });
      document.getElementById("open-popup-btn3").addEventListener("click",function(){
        document.getElementsByClassName("popup")[0].classList.add("active");
      });
       
       
      document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
        document.getElementsByClassName("popup")[0].classList.remove("active");
      });
          
};