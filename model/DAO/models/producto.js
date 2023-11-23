import mongoose from 'mongoose'

const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number
},{ versionKey: false })

export const producto = _ => mongoose.model('productos', productoSchema)


