import express from 'express'
import UsuarioController from '../controllers/usuariosController.js'

const router = express.Router()

router.post('/cadastrar', UsuarioController.cadastrarUsuario).post('/autenticar', UsuarioController.autenticarUsuario)

export default router
