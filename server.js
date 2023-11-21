import express from 'express'
import RouterProductos from './router/productos.js'
import config from './config.js'
import CnxMongoDB from './model/DBMongo.js'

const app = express()
app.use(express.json())

app.use('/api/productos', new RouterProductos().start())


// -----------------------------------------------
//         LISTEN DEL SERVIDOR EXPRESS
// -----------------------------------------------
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
app.listen(PORT, () => console.log(`Servidor APIRestful escuchando en http://localhost:${PORT}`))
    .on('error', error => console.log(`Error en servidor: ${error.message}`))

