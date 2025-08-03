
const express = require('express')
const app = express();

const depross = require('./depross')

app.get('/legaliza', (req, res)=>{
    const dados = depross.mostraMatriculados()
    
    res.json({dado: dados})
})

app.get('/legaliza/nome', (req, res)=>{
    const nome = req.query.nome
    const inscritos = depross.pesquisarPorNome(nome)

    res.json({listado: inscritos})
})

app.get('/legaliza/sexo/:sexo', (req, res)=>{
    const sexo = req.query.sexo

    if (!sexo) {
    return res.status(400).json({ error: 'Parâmetro sexo é obrigatório' });
  }
    const generos = depross.mostreSexo(sexo)

    res.json({listado: generos})
})

app.get('/legaliza/turma/idade',(req, res)=>{
    const turma = depross.idadeEntre()
    res.json({turma: turma})
})


app.listen(8080, ()=>{
    console.log('servidor node inicia em http://localhost:8080')
})