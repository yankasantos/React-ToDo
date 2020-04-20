const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App
const app = express();
app.use(express.json());

//Conectando ao Banco de Dados
mongoose.connect(
  'mongodb://localhost:27017/todoapi',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);
requireDir('./api/models');

//Rotas
app.use('/api', require('./api/routes/router'));

app.listen(3333);