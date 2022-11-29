const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json());
app.use(cors());

let livros = [
    {id: 1,  titulo: 'Primeiro livro'}
];
     
app.get('/listar/:id',(req,res)=>{
    let id = req.params.id;
    if(id > 0 && id <= livros.length){
        res.status(200).send(livros[id - 1]);
    } else{ 
    res.status(404).send('Livro não encontrado');
}
});

app.get('/listar_todos',(req,res)=>{
    res.status(200).send(livros);
});

app.post('/livros/add',(req,res)=>{
    let livro = req.body;
    let position = livros.length + 1;
    livros.push(livro);
    livro.position = position;
    res.status(201).send(livro)
});


app.put('/livros/editar/:id',(req,res)=>{
    let id = req.params.id;
    if(id > 0 && id <= livros.length){
        let livro = req.body;
        livros[id - 1] = livro;
        res.status(200).send(livro);
    } else{ 
    res.status(404).send('Livro não encontrado');
}
});

app.delete('/livros/apagar/:id',(req,res)=>{
    let id = req.params.id;
    if(id > 0 && id <= livros.length){
        livros.slice(id - 1, 1);
        res.status(200).send('Livro apagado');
    } else{ 
    res.status(404).send('Livro não encontrado');
}
});

app.all('*', (req, res) => { 
    res.status(404).send('Página não encontrada');
}); 
//Para rodar vamos usar o código a baixo chamando pelo node livros.js e para 
//testar vamos usar o insomnia chamando a URL correspondente com a porta 4040
app.listen('4040', ()=>{ 
    console.log("Servidor escutando na porta 4040")
}) ;

