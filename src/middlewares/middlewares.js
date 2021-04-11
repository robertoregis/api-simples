// Arquivo que contém os middlewares

// Um middleware é uma função
// Ele é tipo uma barreira que você pode coloca-la antes do controller, assim impedindo 
// ou não do meesmo ser executado.
// Você pode usa-lo também para executar algo antes da execução principal

// Criando um middleware
exports.barreira = (req, res, next) => {
    // Este middleware vai ser usado apenas para informar que tudo está ocorrendo bem.
    console.log('Tudo está ocorrendo bem.');
    // A função next() precisa ser executada para o controller ser executado.
    // Caso não a tenha, a aplicação parará de executar neste middleware.
    next();
};