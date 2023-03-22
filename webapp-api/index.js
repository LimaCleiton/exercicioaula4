import express from 'express';
import cors from 'cors';

import { Person } from './person.js';

const app = express();
const port = 3000;

app.use(express.json(), cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post("/imc/calculate", (req, res) => {
    const {
        height, 
        weight
    } = req.body;
    
    const person = new Person(height, weight)
        .withImc()
        .withImcDescription();
    
    res.send(JSON.stringify(person));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


//Implementação exercício aula [4] 21/03

const express = require('express');

app.use(express.json());

app.post('/imc', (req, res) => {
  const { altura, peso } = req.body;
  const imc = peso / (altura * altura);
  let description = '';

  if (imc < 18.5) {
    description = 'Magreza';
  } else if (imc >= 18.5 && imc < 25) {
    description = 'Normal';
  } else if (imc >= 25 && imc < 30) {
    description = 'Sobrepeso';
  } else {
    description = 'Obesidade';
  }

  const response = {
    altura,
    peso,
    imc,
    description,
  };

  res.send(response);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
