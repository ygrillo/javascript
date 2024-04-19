import { publisher } from "../models/publisher.js";

class PublisherController {
    static async listPublishers(req, res) {
        try {
            const publisherArray = await publisher.find({});
            res.status(200).json(publisherArray);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição.`,
            });
        }
    }

    static async listPublisherById(req, res) {
        try {
            const id = req.params.id;
            const foundPublisher = await publisher.findById(id);
            res.status(200).json(foundPublisher);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição.`,
            });
        }
    }

    static async registerPublisher(req, res) {
        try {
            const newPublisher = await publisher.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso.",
                author: newPublisher,
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar editora.`,
            });
        }
    }

    static async updatePublisher(req, res) {
        try {
            const id = req.params.id;
            await publisher.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Editora atualizada!" });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na atualização.`,
            });
        }
    }

    static async deletePublisherById(req, res) {
        try {
            const id = req.params.id;
            await publisher.findByIdAndDelete(id); // pode usar também deleteOne({ _id: id })
            res.status(200).json({ message: "Editora deletada com sucesso." });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na deleção.`,
            });
        }
    }
}

export default PublisherController;
