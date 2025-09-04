let listaFrutasVerduras = [];
let listaGolosinas = [];
let listaLacteos = [];
let listaCarnes = [];
let respuesta = " ";
let producto = " ";
let categoria = " ";

respuesta = prompt("deseas agregar un alimento a tu lista de compras? (si/no)");

while (respuesta.toLowerCase() == "si") {
    producto = prompt("Qué alimento deseas agregar?");
    categoria = prompt("A qué categoría pertenece? (frutas/verduras, golosinas, lacteos, carnes)");

    if (categoria.toLowerCase() == "frutas/verduras") {
        listaFrutasVerduras.push(producto);
    } else if (categoria.toLowerCase() == "golosinas") {
        listaGolosinas.push(producto);
    } else if (categoria.toLowerCase() == "lacteos") {
        listaLacteos.push(producto);;
    }else if (categoria.toLowerCase() == "carnes") {
        listaCarnes.push(producto);
    }

    respuesta = prompt("deseas agregar otro alimento a tu lista de compras? (si/no)");
}

alert(`Esta es tu lista de compras:\n
       Frutas/Verduras: ${listaFrutasVerduras}\n
       Golosinas: ${listaGolosinas}\n
       Lácteos: ${listaLacteos}\n
       Carnes: ${listaCarnes}`);