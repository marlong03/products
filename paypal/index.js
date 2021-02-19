var email= document.getElementById("email");
var form= document.getElementById("form-contain");
var div_button= document.getElementById("div-email");
var cerrar= document.getElementById("cerradura");

//var change=2;
cerrar.addEventListener("click", evento_cerrar);
email.addEventListener("click", evento);
function evento(){
    
    form.classList.toggle("change-display");
    div_button.classList.toggle("exit-display");
    //change=0;
    
    console.log(form);
}

function evento_cerrar(){
    
    form.classList.remove("fadeInDown");
    form.classList.add("fadeInUp");
    div_button.classList.toggle("exit-display");
    //change=1;
    console.log(form);
    setTimeout("espera()",400);

}
function espera(){
    
            form.classList.remove("change-display");
       form.classList.remove("fadeInUp");
       form.classList.add("fadeInDown");
       
    
}



