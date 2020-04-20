const express = require('express');
const mongoose = require('mongoose');

//Iniciando App
const app = express();

//Conectando ao Banco de Dados

mongoose.connect('mongodb://localhost:27017/todoapi');

//Criando rota
app.get('/',(req, res) => {
  res.send("Hello Wolrd NodeJS");
});

app.listen(3333);