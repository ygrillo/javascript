import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: String, require: true },
    },
    { versionKey: false }
);

const publisher = mongoose.model("editoras", publisherSchema);

export { publisher, publisherSchema };
