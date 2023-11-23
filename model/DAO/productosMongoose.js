import CnxMongoDB from "../DBMongoose.js"
import * as model from './models/producto.js'

class ModelMongoDB {

    obtenerProductos = async _ => {
        if(!CnxMongoDB.connection) return []

        const Producto = model.producto()
        const productos =  await Producto.find({})
        return productos || []
    }

    obtenerProducto = async id => {
        if(!CnxMongoDB.connection) return {}

        const Producto = model.producto()
        const producto =  await Producto.findOne({_id:id})
        return producto || {}
    }

    guardarProducto = async producto => {
        if(!CnxMongoDB.connection) return {}

        const Producto = model.producto()
        const productoModel = new Producto(producto)
        const productoGuardado = await productoModel.save()
        return productoGuardado
    }

    actualizarProducto = async (id,producto) => {
        if(!CnxMongoDB.connection) return {}

        const Producto = model.producto()
        await Producto.updateOne(
            { _id: id },       //query
            { $set: producto }
        )
        
        const productoActualizado = await this.obtenerProducto(id)
        return productoActualizado
    }

    borrarProducto = async id => {
        if(!CnxMongoDB.connection) return {}

        const productoEliminado = await this.obtenerProducto(id)

        const Producto = model.producto()
        await Producto.deleteOne({ _id: id })

        return productoEliminado
    }
}

export default ModelMongoDB
