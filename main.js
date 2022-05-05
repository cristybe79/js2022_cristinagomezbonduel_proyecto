
const contenedorCategory1 = document.getElementById('category1')

//lo traigo desde bd por Storage
const catalogoHogar1 = JSON.parse(localStorage.getItem("catalogoCompleto"))
console.log(catalogoHogar1)




//===============login usuario//
const abrirLogin = document.querySelector(".abrirLogin")
const login = document.querySelector(".login")
const cerrarLogin = document.querySelector("#cerrarLogin")

abrirLogin.addEventListener('click', () => {
    login.classList.add('modal-active')
    console.log('funciona')
})

cerrarLogin.addEventListener('click', () => {
    login.classList.remove('modal-active')
})


//validacion
const inputNombre = document.getElementById('nombre')
const inputMail = document.getElementById('email')
const errorNombre = document.getElementById('nombreValido')
const errorMail = document.getElementById('mailValido')

inputNombre.addEventListener('input', () => {

    let nombre = inputNombre.value
    console.log(inputNombre.value) //
    ///con SugarSintax////
    nombre.length < 2 ? inputNombre.classList.add('input-error') || errorNombre.classList.add('error-mostrar') : inputNombre.classList.remove('input-error') && errorNombre.classList.remove('error-mostrar')

})

inputMail.addEventListener('input', () => {
    
    inputMail.value == "" ? inputMail.classList.add('input-error') || errorMail.classList.add('error-mostrar') : inputMail.classList.remove('input-error') && errorMail.classList.remove('error-mostrar')


})
// toma los valores y los carga en un array
const usuarioRegistrado = []
const suscripcion = document.getElementById('suscripcion')
const formulario = document.getElementById('formulario')
const registroExito = document.getElementById('registroExito')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const nombre = inputNombre.value
    const mail = inputMail.value

    if (nombre.length > 2 && mail !=="") {
        usuarioRegistrado.push({
            nombre: nombre,
            mail: mail,
        })
        console.log(usuarioRegistrado)
        registroExito.classList.remove('noMostrar')
        formulario.reset()
    }
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarioRegistrado))
})

