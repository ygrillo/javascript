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
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso.",
                book: newBook,
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
