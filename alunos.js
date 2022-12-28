const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json());
app.use(cors());

let alunos = [
    {id: 1,  nome: 'Peter Park'}
];
     
app.get('/listar/:id',(req,res)=>{
    let id = req.params.id;
    if(id > 0 && id <= alunos.length){
        res.status(200).send(alunos[id - 1]);
    } else{ 
    res.status(404).send('Aluno não encontrado');
}
});

app.get('/listar_todos',(req,res)=>{
    res.status(200).send(alunos);
});

app.post('/alunos/add',(req,res)=>{
    let aluno = req.body;
    let position = alunos.length + 1;
    alunos.push(aluno);
    alunos.position = position;
    res.status(201).send(aluno)
});


app.put('/alunos/editar/:id',(req,res)=>{
    let id = req.params.id;
    if(id > 0 && id <= alunos.length){
        let aluno = req.body;
        alunos[id - 1] = aluno;
        res.status(200).send(aluno);
    } else{ 
    res.status(400).send('Aluno não encontrado');
}
});

app.delete('/alunos/apagar/:id',(req,res)=>{
    let id = req.params.id;
    if(id > 0 && id <= alunos.length){
        alunos.slice(id - 1, 1);
        res.status(200).send('Aluno apagado');
    } else{ 
    res.status(400).send('Aluno não encontrado');
}
});

app.all('*', (req, res) => { 
    res.status(404).send('Página não encontrada');
}); 
//Para rodar vamos usar o código a baixo chamando pelo node alunos.js e para 
//testar vamos usar o insomnia chamando a URL correspondente com a porta 4040
app.listen('4040', ()=>{ 
    console.log("Servidor escutando na porta 4040")
}) ;