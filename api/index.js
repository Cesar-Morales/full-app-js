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

//para enviar
app.get('/', (req,res) => {
    res.send("PAGINA EN CONSTRUCCION! FALTA AGREGAR EL FRONTEND")
})

//para enviar
app.get('/prueba', (req,res) => {
    res.send("Hola, Estoy funcionando")
})

// para guardar
app.post('/transaccion', (req,res) => {
    res.send("Me hicieron post")
})

app.listen(port, () => {
    console.log(`Estoy ejecutandome en el http://localhost:${port}`)
})