import express from 'express'
import AutorController from '../controllers/autoresController.js'
import autorizacao from '../middlewares/autorizacao.js'
import paginar from '../middlewares/paginar.js'

const router = express.Router()

router
  .get('/autores', autorizacao, AutorController.listarAutores, paginar)
  .get('/autores/:id', autorizacao, AutorController.listarAutorPorId)
  .post('/autores', autorizacao, AutorController.cadastrarAutor)
  .put('/autores/:id', autorizacao, AutorController.atualizarAutor)
  .delete('/autores/:id', autorizacao, AutorController.excluirAutor)

export default router
