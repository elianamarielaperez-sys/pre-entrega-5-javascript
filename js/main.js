class Producto {
    constructor(id, nombre, precio, categoria, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

const remera = new Producto(1, "Remera", 20000, "Training", 10);
const calza = new Producto(2, "Calza", 40000, "Training", 8);
const campera = new Producto(3, "Campera", 60000, "Running", 5);

console.log("Stock original:");
console.log(remera);
console.log(calza);
console.log(campera);

remera.vender(2);
console.log("Stock de remera modificado:")
console.log(remera);

calza.vender(5);
console.log("Stock de calza modificado:")
console.log(calza);


const productos = [remera, calza, campera];

function mostrarProductos(productos) {
    for( const producto of productos){
        console.log(producto);
    }
}

console.log("Productos dentro del Array:");
mostrarProductos(productos);
