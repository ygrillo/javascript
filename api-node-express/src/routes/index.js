import express from 'express'
import autores from './autoresRoutes.js'
import livros from './livrosRoutes.js'
import usuarios from './usuariosRoutes.js'

const routes = app => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso de node' })
  })

  app.use(express.json(), livros, autores, usuarios)
}

export default routes
