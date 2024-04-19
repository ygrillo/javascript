import { author } from "../models/author.js";

class AuthorController {
    static async listAuthors(req, res) {
        try {
            const authorArray = await author.find({});
            res.status(200).json(authorArray);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição.`,
            });
        }
    }

    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const foundAuthor = await author.findById(id);
            res.status(200).json(foundAuthor);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição.`,
            });
        }
    }

    static async registerAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso.",
                author: newAuthor,
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar autor.`,
            });
        }
    }

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado!" });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na atualização.`,
            });
        }
    }

    static async deleteAuthorById(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id); // pode usar também deleteOne({ _id: id })
            res.status(200).json({ message: "Autor deletado com sucesso." });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na deleção.`,
            });
        }
    }
}

export default AuthorController;
