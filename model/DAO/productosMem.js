class ModelMem {
    constructor() {
        this.productos = [
            { id: '1', nombre: 'TV', precio: 1234, stock: 55 },
            { id: '2', nombre: 'Mesa', precio: 234, stock: 23 },
            { id: '3', nombre: 'Mouse', precio: 123, stock: 436 },
        ]
    }

    obtenerProductos = async _ => this.productos

    obtenerProducto = async id => {
        const producto = this.productos.find(producto => producto.id == id)
        //console.log(producto)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String(parseInt(this.productos[this.productos.length-1]?.id || 0) + 1)
        this.productos.push(producto)
        return producto
    }

    actualizarProducto = async (id,producto) => {
        producto.id = id

        const indice = this.productos.findIndex(producto => producto.id == id)

        if(indice != -1) {
            const productoAnt = this.productos[indice]
            const productoNuevo = { ...productoAnt, ...producto }
            this.productos.splice(indice,1,productoNuevo)
            return productoNuevo
        }
        else {
            producto.id = String(parseInt(this.productos[productos.length-1]?.id || 0) + 1)
            this.productos.push(producto)
            return producto
        }
    }

    borrarProducto = async id => {
        let producto = {}
        const indice = this.productos.findIndex(producto => producto.id == id)

        if(indice != -1) {
            producto = this.productos.splice(indice,1)[0]
        }

        return producto
    }
}

export default ModelMem
