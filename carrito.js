let products = ["gaseosa", "agua", "cerveza", "vino", "fernet", "gin", "vodka" ]
let carrito = [];

const agregarProducto =() =>{
    const productoagregado= prompt("Que producto desea llevar?").toLowerCase()
    if(products.includes(productoagregado)){
        carrito.push(productoagregado);
        alert("Producto agregado!")
    }else{
        alert('No vendemos ese producto, volve la proxima!')
    }
}
const mostrarcarrito = () => {
    alert("Tus productos seleccionados son:  " + carrito.join( "\n " ))
}

const buscarunproducto = () =>{
    const buscar = prompt("Ingresa el producto que desea buscar")
    const productoencontrado = carrito.find(producto => producto == buscar)
    alert(productoencontrado)
}

const buscarcoincidencias = () => {
    const buscarr = prompt("buscar coincidencias").toLocaleLowerCase()
    const resultado = products.filter(producto => producto.includes(buscarr))
    alert(resultado)

}
const eliminarproducto = () =>{
    const eliminar = prompt("Que producto desea eliminar?").toLowerCase()
    const resultado = carrito.splice(carrito.indexOf(eliminar))
    alert("Se elimino " + eliminar)
}


