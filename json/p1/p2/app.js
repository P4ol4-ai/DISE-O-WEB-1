//Datos json:
const productosJSON = [
    {
        id:1,
        nombre: "Cafe Moka",
        precio: 70.00,
        descripcion: "Exquisto cafe con chocolate y crema",
        //imagen: "cafe moka.jpg"
        imagen: "imagenes/cafe.jpg"
        
    },
    {
        id:2,
        nombre: "Te Verde",
        precio: 50.00,
        descripcion: "Hoja de te verde",
        imagen: "/imagenes/teVerde.jpg"
    },
    {
        id:3,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mescla de Frutas",
        imagen: " imagenes/Smoothie de Frutas.jpg"
    }
]
//Funcion principal
function mostrarProductos(){
    const contenedor = document.querySelector('#contenedor-productos')
    //recorrer
    productosJSON.forEach(productos => {
        //crear un elemento desde javascript se creara un contenedor div
        const card = document.createElement('div')
        //asignar al contendedor una clase
        card.classList.add('productos-card')
        //construir la tarjeta 
        card.innerHTML =  `
        <h2> ${productos.nombre}</h2>
        <p>${productos.descripcion}</p>
        <button data-id="${productos.id}">Agregar al carrito</button>
        `
        //inserta el nuevo elemento a la tarjeta
        contenedor.appendChild(card);
    })
}
//llamar a la funcion
mostrarProductos();