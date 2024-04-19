import express from "express";
import PublisherController from "../controllers/publisherController.js";

const routes = express.Router();

routes.get("/editoras", PublisherController.listPublishers);
routes.get("/editoras/:id", PublisherController.listPublisherById);
routes.post("/editoras", PublisherController.registerPublisher);
routes.put("/editoras/:id", PublisherController.updatePublisher);
routes.delete("/editoras/:id", PublisherController.deletePublisherById);

export default routes;
