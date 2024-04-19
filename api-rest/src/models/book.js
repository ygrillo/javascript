import mongoose from "mongoose";
import { authorSchema } from './author.js';
import { publisherSchema } from "./publisher.js";

const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: String, required: true },
        editora: publisherSchema,
        preco: { type: Number },
        paginas: { type: Number },
        autor: authorSchema
    },
    { versionKey: false } // não queremos versionar o schema
);

const book = mongoose.model("livros", bookSchema);

export default book;
