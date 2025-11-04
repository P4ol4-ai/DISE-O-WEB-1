//1.Objetos de javascript
const articulo={
    producto: "Monitor",
    pulgadas: 27,
    existencias: true
}
//2.Conversion a cadena de texto json
const jsonParaEnviar = JSON.stringify(articulo)
console.log(jsonParaEnviar.producto)
//3.Convertimos a objeto Json para poder usarlo
const objetoRecuperado = JSON.parse(jsonParaEnviar)
//4.Para acceder a algun atributo
console.log(objetoRecuperado.producto)
console.log(objetoRecuperado.pulgadas)
console.log(objetoRecuperado.existencias)