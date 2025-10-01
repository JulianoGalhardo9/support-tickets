// A palavra 'export' torna esta variável 'tickets' acessível para outros arquivos do seu projeto.
// 'const tickets = [' inicia a criação de uma lista (array) de rotas.
export const tickets = [
    // Abaixo está o primeiro objeto da lista, que representa uma rota específica.
    {
        // Define o método HTTP para esta rota. 'POST' é geralmente usado para criar algo novo no servidor.
        method: "POST",

        // Define o caminho na URL que ativa esta rota (ex: www.seusite.com/tickets).
        path: "/tickets",

        // 'controller' é a função que será executada quando a rota for acessada com o método e caminho corretos.
        controller: (request, response) => {

            // 'response.end()' envia uma resposta simples de texto para o navegador/cliente e encerra a conexão.
            response.end("Criado com sucesso!")
        },
    },
]