import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/autores", AuthorController.listAuthors);
routes.get("/autores/:id", AuthorController.listAuthorById);
routes.post("/autores", AuthorController.registerAuthor);
routes.put("/autores/:id", AuthorController.updateAuthor);
routes.delete("/autores/:id", AuthorController.deleteAuthorById);

export default routes;
