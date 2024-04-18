import express from "express";
import connectToDatabase from "./config/db-connect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error("erro de conexão.", error);
});
connection.once("open", () => {
    console.log("conexão com o banco feito com sucesso!");
});

const app = express();
routes(app);

export default app;
