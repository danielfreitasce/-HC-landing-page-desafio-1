function armazenar() {

    let inputEmail = document.getElementById('email').value;

    if ( (inputEmail === "") || (!(validaEmail(inputEmail))) ) {
        swal({
            title: "Oxe",
            text: "Coloque seu email",
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
            title: "Só o mí disbuiado",
            text: "Você se cadastrou!",
            icon: "success",
        });

    }


    function validaEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}



