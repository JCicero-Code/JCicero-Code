const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Oi! Teste ao usar get")
});

app.post('/',(req,res)=>{
    res.send("Oi! Teste ao usar post")
});

app.listen('8080', ()=>{ 
    console.log("Servidor escutando na porta 8080")
}) ;


