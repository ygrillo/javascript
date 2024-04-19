# Projeto de API REST
### Introdução
Projeto realizado com a ajuda da Alura no curso "Node.js: criando uma API Rest com Express e MongoDB" e ministrado por Juliana Amoasei.
Tem como objetivo criar uma API com dados de uma livraria contendo 3 rotas - livros, autores e editoras.
### Funcionalidades
* Listar todos livros, autores ou editoras cadastrados.
* Buscar um único único livro, autor ou editora pelo seu ID cadastrado.
* Atualizar um único livro, autor ou editora.
* Deletar um único único livro, autor ou editora.
### Installation Guide
* Clone esse repositório [aqui](https://github.com/ygrillo/javascript.git).
* A branch master é a branch mais estável, trabalhe dela.
* Execute `npm install` para instalar todas as dependências.
* Crie sua própria coleção no MongoDB Atlas, é gratuito.
* Crie um arquivo `.env` na raiz do seu projeto e insira sua variáveis. Veja `.env.example` para consulta.
### Uso
* Execute `npm run dev` para iniciar a aplicação.
* Conecte-se à API usando Postman (caso não esteja usando WSL) ou Thunder Client (instalado no VS Code) na porta 3000.
* Exemplo: http://localhost:3000/livros
### API Endpoints
| Verbos HTTP | Endpoints | Ação |
| --- | --- | --- |
| GET | /livros | Acessar todos os livros cadastrados |
| POST | /livros | Cadastrar novo livro |
| PUT | /livros/:id | Atualizar informações de um único livro |
| DELETE | /livros/:id | Deletar um único livro |
* Os mesmos verbos HTTP valem para autores e editoras, trocando apenas "/livros" por "/autores" ou "/editoras".
### Tecnologias usadas
* [NodeJS](https://nodejs.org/) Este é um ambiente de execução de plataforma cruzada construído no mecanismo JavaScript V8 do Chrome, usado na execução de códigos JavaScript no servidor. Permite instalação e gerenciamento de dependências e comunicação com bancos de dados.
* [ExpressJS](https://www.expresjs.org/) Este é um framework NodeJS para aplicação *web*.
* [MongoDB](https://www.mongodb.com/) Banco de dados de documentos NoSQL gratuito e de código aberto com flexibilidade e escalabilidade. Dados são armazenados em documentos com formato JSON.
* [Mongoose ODM](https://mongoosejs.com/) Facilita escrever validações MongoDB trazendo uma solução direta baseada em *Schemas* para modelar dados da aplicação.
### Autors
* [Yuri Grillo](https://github.com/ygrillo)
* ![Yuri Grillo](https://avatars.githubusercontent.com/u/80396042?v=4)
### Licença
Este projeto está disponível sob a licença ISC.