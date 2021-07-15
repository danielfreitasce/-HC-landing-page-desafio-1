
/*function armazenar(){

    if(localStorage.contador){
        localStorage.contador = Number(localStorage.contador)+1;
    }
    else{
        localStorage.contador=1;
    }

       let inputEmail = document.getElementById('email').value;
       localStorage.setItem('email_'+localStorage.contador, inputEmail);

}*/

function armazenar() {

    if (localStorage.contador) {
        localStorage.contador = Number(localStorage.contador) + 1;
    }
    else {
        localStorage.contador = 1;
    }

    var inputEmail = document.getElementById('email').value;
    
    localStorage.setItem('email_' + localStorage.contador, inputEmail);
    let $ = document.querySelector;
    $("#cadastro-email").replaceWith("<div id='Elemento-3'>Obrigado por se inscrever</div>");
}
