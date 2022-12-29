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
    let allBooks = req.body;
    if(allBooks){
        res.status(200).send(livros);
    } else{ 
    res.status(404).send('Livros não encontrado');
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

