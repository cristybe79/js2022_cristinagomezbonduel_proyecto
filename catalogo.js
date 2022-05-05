
const contenedorProductos = document.getElementById('catalogoCompleto')
const btnsuma = document.querySelector('#btnsuma') 
///carrito
const agregaCarrito = document.getElementById('agrega-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const total = document.getElementById('total')

//lo traigo desde bd
const catalogoHogar1 = JSON.parse(localStorage.getItem("catalogoCompleto"))
console.log(catalogoHogar1)

const carrito = []


///recorre array catalogo para mostrarlo en card
const mostrarCatalogo = (array) => {
    contenedorProductos.innerHTML=" "

    array.forEach((producto) => {
    const div = document.createElement('div')
    div.className = "estiloCard"
    div.innerHTML = `
    <div>
    <img src = ${producto.img}    class="card-img-top" alt = "${producto.tipo}" >
    </div>
    <p class="card-text rojo">${producto.categoria}</p>
    <div class="card-body">
            <h5 class="card-title grande">${producto.tipo}</h5>
            <p class="card-text rojo">${producto.descripcion}</p>
            <p class="card-text rojo">Precio: $${producto.precio}</p>
        <button onclick="agregarCarrito(${producto.codArt})" class="boton-agregar">Agregar</button>
        </div>                
        `

    contenedorProductos.appendChild(div)
})
}
mostrarCatalogo(catalogoHogar1)


//agregar al Carrito
const agregarCarrito = (itemAgregado) => {
    const itemCarrito = carrito.find(el => el.codArt == itemAgregado)
    if (itemCarrito) {
        itemCarrito.cantidad++
        //lo guardo en el local Storage

        localStorage.setItem('carritoCompra', JSON.stringify(carrito))
    } else {
        const producto = catalogoHogar1.find((prod) => prod.codArt == itemAgregado)

        carrito.push({
            codArt: producto.codArt,
            img:producto.img,
            categoria: producto.categoria,
            descripcion:producto.descripcion,
            tipo: producto.tipo,
            precio: producto.precio,
            cantidad: 1
            
        })
    }

    Swal.fire('Producto Agregado Correctamente')
    actualizaCarrito()
}
const actualizaCarrito = () => {
    agregaCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('itemCarrito')
        div.innerHTML = `
                <p>${prod.codArt}</p>
                <p>${prod.descripcion}</p>
                <p>${prod.categoria}</p>
                <p>Precio: $${prod.precio}</p>
                <button onclick="agregarCarrito(${prod.codArt})" class="boton-agregar-c"><i class="fas fa-plus-square"></i></button>                
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarItem(${prod.codArt})" class="boton-eliminar"><i class="fas fa-minus-square"></i></button>


            `

        agregaCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    
    total.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
    localStorage.setItem('totalCarrito',JSON.stringify(total))
}        

//eliminar Item del Carrito
const eliminarItem = (itemEl) => {
    const itemparaEliminar = carrito.find(el => el.codArt == itemEl)
    itemparaEliminar.cantidad--
    //lo guardo en el local Storage
    localStorage.setItem('carritoCompra', JSON.stringify(carrito))
    if (itemparaEliminar.cantidad === 0) {
        const indice = carrito.indexOf(itemparaEliminar)
        carrito.splice(indice,1)
    }
actualizaCarrito()
}




        //========================= modales
const modalAbrir = document.getElementById('modalAbrirCarrito')
const modalCerrar = document.getElementById('modal-cerrar')
const modalContenedor = document.getElementsByClassName('modal-contenedor')[0]


modalAbrir.addEventListener('click', () => {
    modalContenedor.classList.add('modal-active')
})

modalCerrar.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})
// =================filtros

const filtroCategoria = document.getElementById('filtroCategoria')
const filtroPrecioMin = document.getElementById('filtroPrecioMin')
const filtroPrecioMax = document.getElementById('filtroPrecioMax')
const filtroPrecio = document.getElementById('filtroPrecio')
let arrayFiltrado = []

let valorFiltroCategoria = filtroCategoria.value
let valorFiltroPrecioMin = filtroPrecioMin.value
let valorFiltroPrecioMax = filtroPrecioMax.value



const filtrar = () => {
    if (valorFiltroCategoria == "0") {
        arrayFiltrado = catalogoHogar1
        
    } else {
        arrayFiltrado = catalogoHogar1.filter(el => el.categoria == filtroCategoria.value)
        console.log(arrayFiltrado)
    }
    
    if (filtroPrecioMin.value > 0  ) {
        arrayFiltrado = arrayFiltrado.filter((el) => el.precio >= filtroPrecioMin.value)
    }
    if (filtroPrecioMax.value > 0) {
        arrayFiltrado = arrayFiltrado.filter((el) => el.precio <= filtroPrecioMax.value)
    }
    mostrarCatalogo(arrayFiltrado)
    console.log(arrayFiltrado)
}

filtroCategoria.addEventListener('change', () => {
    filtrar()

})
filtroPrecio.addEventListener('click', () => {
    filtrar()
        console.log(filtroPrecioMin.value)
        console.log(filtroPrecioMax.value)
})


