const salvarTransaccion = document.getElementById('salvarTransaccion');

salvarTransaccion.addEventListener('submit', (e) =>{
    e.preventDefault();
    let descripcionTransaccion = document.getElementById("descripcionTransaccion").value; 
    let precioTransaccion = document.getElementById("precioTransaccion").value;
    let transaccion = { descripcionTransaccion:descripcionTransaccion,precioTransaccion:precioTransaccion}
    let transaccionJson = JSON.stringify(transaccion)
    //console.log(transaccionJson)

    //mandar algo del fronted al backend
    fetch('http://localhost:8080/transaccion', {
        method:'POST',
        body: transaccionJson
    })
})