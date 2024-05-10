import mongoose from "mongoose";
import "dotenv/config";

const { MONGO_DB_PSWD, MONGO_DB_USER } = process.env;

mongoose.connect(
    `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PSWD}@cluster0.s9i5e8i.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0`
);

const db = mongoose.connection;

export default db;
