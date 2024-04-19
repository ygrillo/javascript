import express from "express";
import books from "./bookRoutes.js";
import authors from "./authorRoutes.js";
import publishers from "./publisherRoutes.js";

const html = `<h1>Leia o README</h1>`

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send(html));

    app.use(express.json(), books, authors, publishers);
};

export default routes;
