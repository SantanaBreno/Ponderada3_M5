# Meus Contatos

   Meus contatos é um projeto que permite a criação e listagem de contatos. O backend e o frontend rodam em uma EC2 comunicando-se com um banco de dados na RDS.

## Descrição

   Meus Contatos é uma aplicação em que posso salvar meus contatos e indicar sesão familiares ou não.


## Tecnologias

   - frontend: react;
   - backend: Node.js e express;
   - banco de dados: postgres;
   - Amazon EC2 e RDS.

# Video demonstração

   link: https://drive.google.com/drive/folders/15V49G5Xp9jKcNHAD3CJj-AYKJMquyC4b?usp=sharing


## Script de criação do banco

   CREATE TABLE contatos (
      id SERIAL PRIMARY KEY,
      nome VARCHAR,
      phone INT,
      familia BOOLEAN
   );

## Commits e suas descrições 

### feat: Adição do html da página 

   Nesse commit é feito a criação do html da aplicação. Nesse html tem um form que manda o nome, numero e a informação se é um familiar

### feat: Adição do css da página

    Nesse commit é realizado a adição do css da página. Ele é bem básico. Apenas cria umas margens e define uma fonte.

### feat: Adição do java script da página

    Nesse commit é adicionado o java script do frontend. Nele é adicionado um event listener no botão de salvar, que, futuramente, ira mandar os dados para o backend através da rota contacts com o método POST. Além disso, foi configurado para, ao a tela carregar, renderizar os contatos salvos. 

### feat: Adição do backend

   Nesse commit é feito a criação do backend. Ele é simples, tem apenas um arquivo chamado server.js que criar as requisições post e get para o banco.

### feat: Mudança do front para react

   Eu decidi mudar o front para react, pois o estático era muito complicado para acessar na instância.

### update: Arrumando query sql no server

   Arrumei as colunas da query de insert.

### fix: Arrumando o código no geral

   Ajustei o objeto de conexão com o banco para se conectar ao banco da rds.

### Update: Arrumando a conexão com o banco

   Arrumei a url a variável de ambiente host que estava errada.