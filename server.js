// Arquivo principal
// O mesmo contém o servidor e outras aplicações que precisam serem iniciadas no início

// Importando o framework Express (e o guardando dentro de uma variável)
const express = require('express');
// Guardando dentro da variável as funções/métodos da framework
const app = express();

// Importando o arquivo de rotas. É aqui que elas serão iniciadas/executadas.
const routes = require('./routes');

// Iniciando as rotas
app.use(routes);

// Iniciando o servidor
// Primeiro é preciso enviar o número da porta
// Segundo é possível enviar uma função que será executada assim que o servidor for iniciado.
app.listen(2000, () => {
    // No caso vai apenas exibir uma mensagem para você ter certeza quee ele foi iniciado com sucesso
    console.log('Servidor iniciado com sucesso!');
});
