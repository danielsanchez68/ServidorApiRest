import fs from 'fs'

class ModelFile {

    constructor() {
        this.nombreArchivo = 'productos.json'
    }

    leerArchivo = async nombre => {
        let productos = []
        try {
            productos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch {}

        return productos
    }

    escribirArchivo = async (nombre, productos) => {
        await fs.promises.writeFile(nombre, JSON.stringify(productos, null, '\t'))
    }


    obtenerProductos = async _ => {
        const productos = await this.leerArchivo(this.nombreArchivo)
        return productos
    }

    obtenerProducto = async id => {
        const productos = await this.leerArchivo(this.nombreArchivo)
        const producto = productos.find(producto => producto.id == id)
        return producto || {}
    }

    guardarProducto = async producto => {
        const productos = await this.obtenerProductos()
        producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1)
        productos.push(producto)

        await this.escribirArchivo(this.nombreArchivo, productos)
        return producto
    }

    actualizarProducto = async (id,producto) => {
        producto.id = id

        const productos = await this.obtenerProductos()
        const indice = productos.findIndex(producto => producto.id == id)

        if(indice != -1) {
            const productoAnt = productos[indice]
            const productoNuevo = { ...productoAnt, ...producto }
            productos.splice(indice,1,productoNuevo)

            await this.escribirArchivo(this.nombreArchivo, productos)
            return productoNuevo
        }
        else {
            producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1)
            productos.push(producto)

            await this.escribirArchivo(this.nombreArchivo, productos)
            return producto
        }
    }

    borrarProducto = async id => {
        let producto = {}

        const productos = await this.obtenerProductos()
        const indice = productos.findIndex(producto => producto.id == id)

        if(indice != -1) {
            producto = productos.splice(indice,1)[0]
            await this.escribirArchivo(this.nombreArchivo, productos)
        }

        return producto
    }
}

export default ModelFile
