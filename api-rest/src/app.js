import express from "express";
import connectToDatabase from "./config/db-connect.js";

const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error("erro de conexão.", error);
});
connection.once("open", () => {
    console.log("conexão com o banco feito com sucesso!");
});

const app = express();
app.use(express.json());

const books = [
    {
        id: 1,
        title: "O Poder dos Quietos",
    },
    {
        id: 2,
        title: "O Hobbit",
    },
];

function searchBook(id) {
    return books.findIndex((book) => {
        return book.id === Number(id);
    });
}

app.get("/", (_, res) => {
    res.status(200).send("<h1>Curso de Node.js</h1>");
});

app.get("/livros", (_, res) => {
    res.status(200).json(books);
});

app.get("/livros/:id", (req, res) => {
    // :id é uma informação variável
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/livros", (req, res) => {
    books.push(req.body);
    res.status(201).send("Livros cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/livros/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send(`Livro ID: ${req.params.id} REMOVIDO!`);
});

export default app;
