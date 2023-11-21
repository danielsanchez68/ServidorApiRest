const PORT = 8080
const MODO_PERSISTENCIA = 'MONGODB'         // 'MEM', 'FILE', 'MONGODB'
const STRCNX = "mongodb+srv://daniel:daniel123@misdatos.fs00f.mongodb.net/?retryWrites=true&w=majority";
//const STRCNX = 'mongodb://127.0.0.1'
const BASE = 'mibase'

export default {
    PORT,   // es igual a -> PORT: PORT
    MODO_PERSISTENCIA,
    STRCNX,
    BASE
}