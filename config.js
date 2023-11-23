import dotenv from 'dotenv'

dotenv.config()

//console.log(process.env)

const PORT =  process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1'
const BASE = process.env.BASE || 'test'

//console.log(STRCNX)

export default {
    PORT,   // es igual a -> PORT: PORT
    MODO_PERSISTENCIA,
    STRCNX,
    BASE
}