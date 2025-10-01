// Importa a lista de rotas que você definiu no arquivo 'tickets.js'.
// Agora, a variável 'tickets' existe neste arquivo e contém aquela lista.
import { tickets } from "./tickets.js";

// Cria e exporta uma nova lista chamada 'routes'.
// O '...' (spread syntax) "espalha" ou "despeja" todos os itens
// da lista 'tickets' dentro desta nova lista 'routes'.
// Em resumo, está fazendo uma cópia da lista de rotas importada.
export const routes = [...tickets]