const express = require('express')
const app = express()

app.get('/users:id',(req,res)=>{
    const id = req.params.id
    res.send(`O ID recebido é: ${id}`)
});

app.post('/',(req,res)=>{
    res.send("Oi! Teste ao usar post")
});

app.get('/logar',(req,res)=>{
    res.redirect('/pages/logar')
});

app.get('/jogar',(req,res)=>{
    res.render('games.html', {status:'logar'});
});

app.get('/listar',(req,res)=>{
    const pagina = req.query.pagina
    const tamanhoPagina = req.query.tamanhoPagina
    res.send('pagina$ {pagina}, tamanhoPagina$ {tamanhoPagina}')
});

app.listen('8080', ()=>{ 
    console.log("Servidor escutando na porta 8080")
}) ;


