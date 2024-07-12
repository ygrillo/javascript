# Projeto Alura - API Node.js com Express

## Objetivo

Simular uma livraria onde é possível cadastrar e listar livros, assim como seus autores e atrelá-los a cada livro.

## Validação de erros

O projeto conta com várias validações de erros:

1. Livro não encontrado;
1. Autor não encontrado;
1. Campos obrigatórios não fornecidos;
1. Página não encontrada (algum caractere escrito errado).

## Rotas

| Método |     Rota      | Descrição                                          |
| :----: | :-----------: | :------------------------------------------------- |
|  POST  |  /cadastrar   | Cadastra novo email e nova senha                   |
|  POST  |  /autenticar  | Autentica email e senha para obter o JWT           |
|  GET   |    /livros    | Lista todos os livros                              |
|  GET   | /livros/busca | Lista todos os livros baseado em alguns parâmetros |
|  GET   |  /livros/:id  | Mostra somente um livro baseado em seu id          |
|  POST  |    /livros    | Cadastra um novo livro                             |
|  PUT   |  /livros/:id  | Altera os campos baseado no id de um livro         |
| DELETE |  /livros:id   | Exclui um livro baseado em seu id                  |
|  GET   |   /autores    | Lista todos os autores                             |
|  GET   | /autores/:id  | Mostra somente um autor baseado em seu id          |
|  POST  |   /autores    | Cadastra um novo autor                             |
|  PUT   |  /autores:id  | Altera os campos baseado no id de um autor         |
| DELETE |  /autores:id  | Exclui um autor baseado em seu id                  |

## Como preparar o ambiente

1. Tenha o NVM instalado. Se não tiver instalado, siga as instruções em [Instalar NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating);
1. Abra um terminal dentro da pasta do projeto;
1. Instale o Node.js versão 20.13.1 ou superior com NPM versão 10.5.2 ou superior com NVM `nvm install 20` e `nvm use 20`;
1. Execute o comando `npm i` ou `npm install` para instalar todas as dependências;
1. Configure o arquivo `.env` na raiz do projeto seguindo o exemplo do arquivo `.env.example`;
1. Instale a extensão Thunder Client no VS Code;

## Como executar o projeto localmente

1. Execute o comando `npm run dev` e aguarde mostrar a mensagem de banco conectado;
1. Utilize a URL `http://localhost:3000` para fazer as consultas;
1. Antes de testar as rotas, faça um cadastro de email e senha com `http://localhost:3000/cadastrar` usando o método **POST**. Envio o objeto no `body`:
   ```json
   {
     "email": "<email>",
     "senha": "<senha>"
   }
   ```
1. Autentique suas credenciais para receber um token JWT usando o objeto anterior com `http://localhost:3000/autenticar` usando o método **POST**;
1. Sempre que for qualquer requisição, utilize o campo **Authorization** em **Headers** para colocar JWT <**token**>;
1. Faça um teste com `http://localhost:3000/autores` usando o método **POST** e insira o objeto abaixo dentro de `body`:
   ```json
   {
     "nome": "J.K. Rowling",
     "nacionalidade": "Inglaterra"
   }
   ```
1. Liste todos os autores usando a mesma URL da etapa anterior mas com o método **GET**;
1. Cadastre um novo livro com a URL `http://localhost:3000/livros` usando o método **POST** e insira o objeto abaixo dentro de `body`. Utilize o `_id` do autor da etapa anterior para preencher o campo `autor`:
   ```json
   {
     "titulo": "Harry Potter e a Pedra Filosofal",
     "autor": "<_id da etapa anterior>",
     "editora": "Rocco",
     "numeroPaginas": 264
   }
   ```

## Parâmetros de consulta

Parâmetros aplicados somente à rota `/livros/busca`.

1. **editora**: Busca o livro pelo nome da editora;
1. **titulo**: Busca o livro pelo seu título;
1. **minNumPaginas**: Busca o livro com um número mínimo de páginas;
1. **maxNumPaginas**: Busca o livro com um número máximo de páginas;
1. **nomeAutor**: Busca o livro pelo nome do autor.

Exemplo: `http://localhost:3000/livros/busca?editora=Rocco&titulo=Harry&minNumPaginas=250&maxNumPaginas=300&nomeAutor=Rowling`

## Parâmetros de paginação

Parâmetros especiais que podem ser usados para consultar tanto livros como autores. Exemplo:

1. **Limite**: Limita a quantidade livros/autores que podem ser visualizados por vez. Padrão é `5`. Exemplo: `http://localhost:3000/livros/busca?limite=2`;
1. **Pagina**: Percorre livros/autores. O padrão é 1. Exemplo: Se houver 10 autores/livros, apenas 5 serão mostrados na pagina 1 e os outros 5 na página 2. Exemplo: `http://localhost:3000/livros/busca?autor=Rowling&pagina=2`;
1. **Ordenação**: É uma string que contém o nome do campo a ser ordenado e sua ordem (crescente ou descrescente). Crescente é 1 e decrescente é -1. Exemplo: `http://localhost:3000/livros/busca?autor=Rowling&ordenacao=titulo:1`. Nesse caso estamos ordenando por título e na ordem crescente.
