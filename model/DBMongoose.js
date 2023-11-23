import mongoose from 'mongoose'
import config from '../config.js'

class CnxMongoDB {
    static connection = false

    static conectar = async _ => {
        try {
            console.log('Conectando a la base de datos con Mongoose...')
            await mongoose.connect(config.STRCNX + '/' + config.BASE);
            console.log('Base de datos conectada!')
            CnxMongoDB.connection = true
        } 
        catch(error) {
            console.log(`Error en conexión de base de datos: ${error.message}`)
        }
    }

    static desconectar = _ => {
        if(!CnxMongoDB.connection) return
        mongoose.connection.close()
        CnxMongoDB.connection = false
    }
}

export default CnxMongoDB