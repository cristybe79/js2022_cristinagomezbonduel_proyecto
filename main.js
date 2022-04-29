
const contenedorCategory1 = document.getElementById('category1')

//lo traigo desde bd por Storage
const catalogoHogar1 = JSON.parse(localStorage.getItem("catalogoCompleto"))


///Mostrar catalogo
const mostrarCategoriasDecoracion = () => {
const filtrado = catalogoHogar1.filter((producto) => producto.categoria === "decoracion")
console.log(filtrado)
contenedorCategory1.innerHTML = ''
filtrado.forEach((cat) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <img src = ${cat.img} alt="${cat.tipo}"/>                
    `
    contenedorCategory1.appendChild(div)
})
}
mostrarCategoriasDecoracion()

const contenedorCategory = document.getElementById('category2')
const mostrarCategoriasIluminacion = () => {
const filtrado = catalogoHogar1.filter((producto) => producto.categoria === "ILUMINACION")
console.log(filtrado)
contenedorCategory.innerHTML = ''
filtrado.forEach((cat) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <img src = ${cat.img} alt="${cat.tipo}"/>                
    `
    contenedorCategory.appendChild(div)
})
}
mostrarCategoriasIluminacion()


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
    console.log(inputNombre.value)
    if (nombre.length < 2) {
        inputNombre.classList.add('input-error')
        errorNombre.classList.add('error-mostrar')
    } else {
        inputNombre.classList.remove('input-error')
        errorNombre.classList.remove('error-mostrar')
    }
})

inputMail.addEventListener('input', () => {
    if (inputMail.value == "") {
        inputMail.classList.add('input-error')
        errorMail.classList.add('error-mostrar')
    } else {
        inputMail.classList.remove('input-error')
        errorMail.classList.remove('error-mostrar')
    }
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
            destino: mail,
        })
        console.log(usuarioRegistrado)
        registroExito.classList.remove('noMostrar')
        formulario.reset()
    }
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarioRegistrado))
})

