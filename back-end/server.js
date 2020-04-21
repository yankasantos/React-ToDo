const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

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