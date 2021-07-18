function armazenar() {

    let inputEmail = document.getElementById('email').value;

    if ( (inputEmail === "") || (!(validaEmail(inputEmail))) ) {
        swal({
            title: "Opa",
            text: "Espia teu email, não parece que está correto",
            icon: "warning",
        });

    } else {


        if (localStorage.contador) {
            localStorage.contador = Number(localStorage.contador) + 1;
        }
        else {
            localStorage.contador = 1;
        }

        localStorage.setItem('email_' + localStorage.contador, inputEmail);
        swal({
            title: "Só o mí disbuiado!",
            text: "Você se cadastrou.",
            icon: "success",
        });

    }


    function validaEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}



