function armazenar(){

    if(localStorage.contador){
        localStorage.contador = Number(localStorage.contador)+1;
    }
    else{
        localStorage.contador=1;
    }

       let inputEmail = document.getElementById('email').value;
       localStorage.setItem('email_'+localStorage.contador, inputEmail);
    alert('Email cadastrado com sucesso!')

}