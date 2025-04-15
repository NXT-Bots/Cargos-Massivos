# Cargos-Massivos
Um sistema em Discord.js V14 que adiciona um cargo específico a todos os membros de um servidor ativos até o momento de execução do código.

## Como usar? 
Primeiramente, para inicializar o projeto, precisamso instalar as dependencias do tal. 
No terminal, ou CMD, abra a pasta do projeto e execute o seguinte comando:

`node i` ou `node install`

Após a instalação das dependencias, você irá procurar pelas seguintes linha de código (dentro da index.js):

`const GUILD_ID = 'Id do servidor';`,
`const ROLE_ID = 'Id do cargo que será adicionado';`,
`client.login('Seu Token Aqui');`

Nessas linhas, você irá trocar os textos dentro as aspas simples pelas informações do seu servidor e do seu bot. Apóes todo esse processo, é só executar o código usando um `node .` ou `node index.js` que o cargo irá ser adicionado nos membros do seu servidor.

## Notas

O bot demora um pouco para adicionar o cargo em todos os membros dependendo da quantidade de membros, você pode acompanhar a barra de progresso da ação no CMD ou Terminal.

É importante que o bot tenha permissão de Administrador dentro do servidor ou de Gerenciamento de Cargos.

Também é importante lembrar de ligar todas as intents do bot pelo painel de desenvolvedor do discord, sem elas o bot não funciona.

A equipe da NXT Bots não se resposábiliza pelo mal uso do código ou uso do tal para intensões maliciosas. Aproveite!
