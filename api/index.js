const express = require('express');
const cors = require('cors');

//app express
const app = express();
const port = 8080
const arregloTransacciones = []

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
app.get('/transacciones', (req,res) => {
    if(arregloTransacciones.length == 0){
        res.send("Arreglo momentaneamente vacio")
    }
    else{
        res.send(arregloTransacciones)
    }
})

// recibir lo del frontend 
app.post('/transaccion', (req,res) => {
    //res.send("Me hicieron post")
    //console.log(req.body)
    let transaccion = req.body
    arregloTransacciones.push(transaccion)
    console.log(`Dato ${req.body.descripcionTransaccion} Guardada`)
})

app.listen(port, () => {
    console.log(`Estoy ejecutandome en el http://localhost:${port}`)
})