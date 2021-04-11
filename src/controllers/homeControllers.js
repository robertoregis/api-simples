// Arquivo que contém controllers

/*
Os controllers são funções e estas são responsáveis por controlar a aplicação.
É através de um controller que decidimos o que fazer com a requisição e o que
será respondido
*/

// Importando a função path() do Node.js (e guardando numa variável).
const path = require('path');

// Criando um controller
exports.home = (req, res) => {
    res.send({
        servidor: 'Olá mundo!'
    });
};

// Criando um controller que mandará um arquivo html como resposta
exports.arquivoHTML = (req, res) => {
    // Usando a função sendFile() para enviar arquivo estático
    // Usando a função join() do path para buscar este arquivo
    res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
};