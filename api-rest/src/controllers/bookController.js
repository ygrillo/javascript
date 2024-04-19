import { author } from "../models/author.js";
import { publisher } from "../models/publisher.js";
import book from "../models/book.js";

class BookController {
    static async listBooks(req, res) {
        try {
            const booksArray = await book.find({});
            res.status(200).json(booksArray);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição.`,
            });
        }
    }

    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição.`,
            });
        }
    }

    static async registerBook(req, res) {
        const newBook = req.body;

        try {
            const foundAuthor = await author.findById(newBook.autor);
            const foundPublisher = await publisher.findById(newBook.editora);
            const fullBook = {
                titulo: newBook.titulo,
                editora: { ...foundPublisher._doc },
                preco: newBook.preco,
                paginas: newBook.paginas,
                autor: { ...foundAuthor._doc },
            };
            const createdBook = await book.create(fullBook);
            res.status(201).json({
                message: "Criado com sucesso.",
                book: createdBook,
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar livro.`,
            });
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado!" });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na atualização.`,
            });
        }
    }

    static async deleteBookById(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id); // pode usar também deleteOne({ _id: id })
            res.status(200).json({ message: "Livro deletado com sucesso." });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na deleção.`,
            });
        }
    }
}

export default BookController;
