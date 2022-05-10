const ordenCompra = document.getElementById('ordenCompra')
const totalResumen = document.getElementById('totalResumen')
///traigo el carro

const resumenCompra = JSON.parse(localStorage.getItem('carritoCompra'))
const totalCarrito = JSON.parse(localStorage.getItem('totalCarrito'))
const apiMercadoPago = document.querySelector('#apiMercadoPago')

console.log(resumenCompra)

const mostrarOrden = () => {
    ordenCompra.innerHTML = ""

    resumenCompra.forEach((element) => {
        const div = document.createElement('div')

        div.innerHTML = `
        <div class="container">
        <div class="row">
        <div class="col"><img id="img3"src=${element.img} alt="${element.tipo}"></div>
        <div class="col">${element.tipo}</div>
        <div class="col">${element.precio}</div>
        <div class="col">${element.cantidad}</div>
        </div>
        </div>
        `
        ordenCompra.appendChild(div)
    });
    totalResumen.innerText = `Total $` + resumenCompra.reduce((acc, element) => acc += element.precio * element.cantidad, 0)

}
mostrarOrden(resumenCompra)
const finalizarCompra =  () => {
    const itemsToMP = resumenCompra.map((producto) => {
        return {
            title: producto.tipo,
            description: "",
            picture_url: producto.img,
            category_id: producto.id,
            quantity: producto.cantidad,
            currency_id: "ARS",
            unit_price: producto.precio
        }
    })
    fetch('https://api.mercadopago.com/checkout/preferences', {
        method:'POST',
        headers: {
            Authorization: "Bearer TEST-2373756045777838-050923-5a2d2a5a87c570bceeaf60084e1fadb5-297296175"
        },
        body: JSON.stringify({
            items: itemsToMP,
            back_urls: {
                success: window.location.href,
                failure:window.location.href
            }
        })
        
    })
    .then(res => res.json())
    .then(data => {

        window.location.replace(data.init_point)
})

}



apiMercadoPago.onclick = () => {

    finalizarCompra()

}

