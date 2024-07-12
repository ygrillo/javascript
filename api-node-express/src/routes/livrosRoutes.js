import express from 'express'
import LivroController from '../controllers/livrosController.js'
import autorizacao from '../middlewares/autorizacao.js'
import paginar from '../middlewares/paginar.js'

const router = express.Router()

router
  .get('/livros', autorizacao, LivroController.listarLivros, paginar)
  .get('/livros/busca', autorizacao, LivroController.listarLivroPorFiltro, paginar)
  .get('/livros/:id', autorizacao, LivroController.listarLivroPorId)
  .post('/livros', autorizacao, LivroController.cadastrarLivro)
  .put('/livros/:id', autorizacao, LivroController.atualizarLivro)
  .delete('/livros/:id', autorizacao, LivroController.excluirLivro)

export default router
