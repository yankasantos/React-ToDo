const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App
const app = express();

//Conectando ao Banco de Dados

mongoose.connect(
  'mongodb://localhost:27017/todoapi',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  
  }
);
requireDir('./api/models');

const Task = mongoose.model('Tasks');


//Criando rota
app.get('/',(req, res) => {
  Task.create({
    title:'Criar Back-end da plicação To Do',
  });

  res.send("Hello Wolrd NodeJS");
});

app.listen(3333);