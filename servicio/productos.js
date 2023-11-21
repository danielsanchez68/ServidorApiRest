//import Model from '../model/DAO/productosMem.js'
//import Model from '../model/DAO/productosFile.js'
import ModelFactory from '../model/DAO/productosFactory.js'
import config from '../config.js'

import Joi from 'joi'


class Servicio {
    constructor() {
        //this.model = new Model()
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        if(id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.model.obtenerProductos()
            return productos
        }    
    }

    guardarProducto = async producto => {
        const ProductoSchema = Joi.object({
            nombre: Joi.string().min(3).max(15).required(),
            precio: Joi.number().required(),
            stock: Joi.number().required()
        })
        const { error } = ProductoSchema.validate(producto)

        if(!error) {
            const productoGuardado = await this.model.guardarProducto(producto)
            return productoGuardado
        }
        else {
            return { error : error.details[0].message }
        }
    }

    actualizarProducto = async (id, producto) => {
        const ProductoSchema = Joi.object({
            nombre: Joi.string().min(3).max(15),
            precio: Joi.number(),
            stock: Joi.number()
        })
        const { error } = ProductoSchema.validate(producto)

        if(!error) {
            const productoActualizado = await this.model.actualizarProducto(id, producto)
            return productoActualizado
            }
        else {
            return { error : error.details[0].message }
        }
    }

    borrarProducto = async id => {
        const productoBorrado = await this.model.borrarProducto(id)
        return productoBorrado
    }
}

export default Servicio