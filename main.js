
const contenedorCategory1 = document.getElementById('category1')

//lo traigo desde bd por Storage
const catalogoHogar1 = JSON.parse(localStorage.getItem("catalogoCompleto"))





//===============login usuario//
// MODALES//
const abrirLogin = document.querySelector("#abrirLogin")
const login = document.querySelector(".login")
const cerrarLogin = document.querySelector("#cerrarLogin")
// const abreFormRegistro = document.querySelector('#abreFormRegistro')
const abrirSignIn = document.querySelector('#abrirRegistro')
const cerrarSignIn = document.getElementById('cerrarRegistro')
const signIn = document.querySelector('.signIn')
//MODALES//
abrirLogin.addEventListener('click', () => {
    login.classList.add('modal-active')
})
cerrarLogin.addEventListener('click', () => {
    login.classList.remove('modal-active')
})
// abreFormRegistro.addEventListener('click', () => {
//     signIn.classList.add('modal-active')
//     login.classList.remove('modal-active')
//     console.log('funciona')

// })
abrirSignIn.addEventListener('click', () => {
    signIn.classList.add('modal-active')
    console.log('funciona')

})
cerrarSignIn.addEventListener('click', () => {
    signIn.classList.remove('modal-active')


})




//validacion 
const inputNombre = document.getElementById('nombreCompleto')
const inputMail = document.getElementById('email')
const inputUserName = document.getElementById('userName')
const errorNombre = document.getElementById('nombreValido')
const errorUserName = document.getElementById('userNameValido')
const errorMail = document.getElementById('mailValido')

inputNombre.addEventListener('input', () => {
    let nombre = inputNombre.value
    console.log(inputNombre.value) //
    ///con SugarSintax////
    nombre.length < 2 ? inputNombre.classList.add('input-error') || errorNombre.classList.add('error-mostrar') : inputNombre.classList.remove('input-error') && errorNombre.classList.remove('error-mostrar')

})
inputUserName.addEventListener('input', () => {
    let userName = inputUserName.value
    console.log(inputUserName.value) //
    userName.length < 2 ? inputNombre.classList.add('input-error') || errorNombre.classList.add('error-mostrar') : inputNombre.classList.remove('input-error') && errorNombre.classList.remove('error-mostrar')
})
inputMail.addEventListener('input', () => {
    let mail = inputMail.value
    console.log(inputMail.value)
    mail.value == "" ? inputMail.classList.add('input-error') || errorMail.classList.add('error-mostrar') : inputMail.classList.remove('input-error') && errorMail.classList.remove('error-mostrar')
})
//REGISTRACION USUARIOS Y GUARDADO EN LOCALSTORAGE
// toma los valores y los carga en un array
const usuarioRegistrado = []
let nroUsario = 0
const suscripcion = document.getElementById('suscripcion')
const formularioRegistracion = document.querySelector('#formularioRegistracion')
const registroExito = document.getElementById('registroExito')



suscripcion.addEventListener('click', registracion)

function registracion  (e)  {
    e.preventDefault();
    console.log('registra')
    nroUsario++;
    const user = {
        id: nroUsario,
        nombre: inputNombre.value,
        userName: inputUserName.value,
        mail: inputMail.value
    }
    if (inputNombre.value === "" ||
        inputUserName.value === "" ||
        inputMail.value === "") {
        alert('Por favor Complete todos los campos')
        console.log(inputNombre.value)
        console.log(inputUserName.value)
        console.log(inputMail.value)
    } else if (usuarioRegistrado.find(user => user.mail === inputMail.value)) {
        alert('mail ya registrado')
    } else {
        usuarioRegistrado.push(user);
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarioRegistrado))
        console.log(usuarioRegistrado)
        registroExito.classList.remove('noMostrar')
        formularioRegistracion.reset()

    }
}



/// Ingreso Usuario///
const formularioIngreso = document.getElementById('formularioIngreso')
const nombreUsuarioRegistrado = document.getElementById('nombreUsuarioRegistrado')
const mailRegistrado = document.getElementById('emailRegistrado')
const registroUsuario = document.querySelector('#registroUsuario')
const ingresoUsuario = (e) => {
    e.preventDefault()
    const getLocal = JSON.parse(localStorage.getItem("usuariosRegistrados"))


    if (nombreUsuarioRegistrado.value === "" || mailRegistrado.value === "") {
        alert('Por favor Complete todos los campos')
    } else if (!getLocal.find(user => user.mail === mailRegistrado.value)) {
        alert('el mail no esta registrado')
    } else {
        alert('Ingreso correctamente')
        console.log(nombreUsuarioRegistrado.value)
        console.log(mailRegistrado.value)
        login.classList.remove('modal-active')
        registroUsuario.innerHTML = `${nombreUsuarioRegistrado.value}`
    }
}

formularioIngreso.addEventListener('submit', ingresoUsuario)


//CARRUSEL///
window.addEventListener('load', function () {
    new Glider(document.querySelector('.carouselLista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carouselBtnAnterior',
            next: '.carouselBtnSiguiente'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 450,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });
});