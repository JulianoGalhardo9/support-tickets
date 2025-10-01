// Importa o módulo 'http' nativo do Node.js para criar um servidor web.
import http from "node:http"

// Importa uma função 'middleware' que vai processar dados em formato JSON.
import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

// Define a função principal que será executada para cada requisição recebida.
async function listener(request, response) {

    // Espera o middleware processar o corpo da requisição (ex: converter de JSON).
    await jsonHandler(request, response)

    // Exibe no terminal o corpo da requisição já processado.
    routeHandler(request, response)
}

// Cria o servidor usando a função 'listener' e o faz "escutar" por conexões na porta 3333.
http.createServer(listener).listen(3333)