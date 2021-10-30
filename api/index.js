const express = require('express');
const cors = require('cors');

//app express
const app = express();
const port = 8080

//#region
app.use(
    express.urlencoded({
        extended: true
}))

app.use(
    express.json({
        type: "*/*"
}))

app.use(cors());
//#endregion

//para enviar al fronted (inicio)
app.get('/', (req,res) => {
    res.send("PAGINA EN CONSTRUCCION! FALTA AGREGAR EL FRONTEND")
})

//para enviar al fronted http://localhost:8080
app.get('/prueba', (req,res) => {
    res.send("Hola, Estoy funcionando")
})

// recibir lo del frontend 
app.post('/transaccion', (req,res) => {
    //res.send("Me hicieron post")
    console.log('recibiendo data')
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`Estoy ejecutandome en el http://localhost:${port}`)
})