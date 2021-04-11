// Arquivo que contém as rotas

// Importando o framework Express (e o guardando dentro de uma variável)
const express = require('express');
// Guardando dentro de uma variável a função Router() do framework
const route = express.Router();

// Importando arquivo que contém middlewares criados por você
const middleware = require('./src/middlewares/middlewares');
// Importando arquivo que tenha controllers criados por você
const homeControllers = require('./src/controllers/homeControllers');

/* Criando as rotas */

// Criando uma rota GET
// Primeiro coloca o endereço que será digitado na url do navegador (a barra é colocada automaticamente).
// Esta rota será acessada com -> localhost:2000/
// Segundo coloca uma função que será executada (é possível colocar mais de uma).
// 1 - Esta função pode ser criada aqui dentro. 2 - Fora daqui, mas ainda dentro do arquivo.
// 3 - Ou fora deste arquivo e importada aqui (chamamos de controllers ou middlewares).
// A função recebe uma requisição -> vinda do lado do cliente enviada pelo usuário (req).
// E uma resposta -> que será enviado pelo servidor, você no caso (res).
route.get('/', (req, res) => {
    // a funçào send() da resposta envia dados
    res.send({
        servidor: "A sua resposta foi enviada!"
    });
});

// Criando uma rota GET que recebe middleware e controller
// Esta rota será acessada com -> localhost:2000/hellow
route.get('/hellow', middleware.barreira, homeControllers.home);

// Criando uma rota que recebe um arquivo html
route.get('/html', middleware.barreira, homeControllers.arquivoHTML);

// Exportando as routas
module.exports = route;