const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    return res.send("Teste ao usar get")
});

app.post('/',(req,res)=>{
    return res.send("Teste ao usar post")
});

app.put('/',(req,res)=>{
    return res.send("Teste ao usar put")
});

app.delete('/',(req,res)=>{
    return res.send("Teste ao usar delete")
});

//Para rodar vamos usar o código a baixo chamando pelo node requisicoes.js e para 
//testar vamos usar o insomnia chamando a URL correspondente
app.listen('8080', ()=>{ 
    console.log("Servidor escutando na porta 8080")
}) ;


