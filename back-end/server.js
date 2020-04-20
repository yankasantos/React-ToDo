const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App
const app = express();

//Conectando ao Banco de Dados

mongoose.connect(
  'mongodb://localhost:27017/todoapi'
);
requireDir('./api/models');



//Criando rota
app.get('/',(req, res) => {
  res.send("Hello Wolrd NodeJS");
});

app.listen(3333);