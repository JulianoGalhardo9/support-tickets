// Exporta uma função assíncrona chamada jsonHandler, que recebe request e response
export async function jsonHandler(request, response) {   

    // Cria um array vazio para armazenar os pedaços (chunks) de dados recebidos da requisição
    const buffers = []                                   

    // Percorre de forma assíncrona cada "chunk" (parte) dos dados que chegam na requisição
    for await (const chunk of request){                  
        // Adiciona cada pedaço (chunk) ao array buffers
        buffers.push(chunk)                              
    }

    // Tenta executar o bloco de código (tratamento seguro para evitar erro ao parsear JSON)
    try {                                                
        // Concatena todos os chunks, transforma em string e faz o parse para objeto JSON
        request.body = JSON.parse(                       
            // Junta todos os pedaços (Buffer.concat), converte em string (toString)
            Buffer.concat(buffers).toString()            
        )
    } catch (error) {                                    
        // Se ocorrer erro (ex: JSON inválido) define o corpo da requisição como null
        request.body = null                              
    }

    // Define o cabeçalho da resposta dizendo que o conteúdo é JSON
    response.setHeader("Content-Type", "application/json") 
}
