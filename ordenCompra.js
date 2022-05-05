const ordenCompra = document.getElementById('ordenCompra')
///traigo el carro

const resumenCompra = JSON.parse(localStorage.getItem('carritoCompra'))
const totalCarrito = JSON.parse(localStorage.getItem('totalCarrito'))

console.log(resumenCompra)

const mostrarOrden = () => {
    ordenCompra.innerHTML=""

    resumenCompra.forEach(element => {
        const div = document.createElement('div')

        div.innerHTML = `
        <div class="container">
        <div class="row">
        <div class="col"><img>${element.codArt}</img></div>
        <div class="col">${element.tipo}</div>
        <div class="col">${element.precio}</div>
        <div class="col">${element.cantidad}</div>

        </div>
        `
        ordenCompra.appendChild(div)
    });
    totalCarrito.innerText = `Total $ ${totalCarrito}`

}
mostrarOrden(resumenCompra)
