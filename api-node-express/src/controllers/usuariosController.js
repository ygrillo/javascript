import bcryptjs from 'bcryptjs'
import HttpStatus from '../httpStatus.js'
import { usuarios } from '../models/index.js'
import jwt from 'jsonwebtoken'

async function gerarHash(senha) {
  if (senha !== '') {
    return await bcryptjs.hash(senha, 10)
  } else {
    return senha
  }
}

class UsuarioController {
  static cadastrarUsuario = async (req, res, next) => {
    try {
      const { email, senha } = req.body
      const usuarioExistente = await usuarios.findOne({ email })
      if (usuarioExistente === null) {
        const usuario = new usuarios({ email, senha: await gerarHash(senha) })
        const usuarioResultado = await usuario.save()
        usuarioResultado.senha = undefined
        res.status(HttpStatus.USER_CREATED).send(usuarioResultado.toJSON())
      } else {
        res.status(HttpStatus.SERVER_INTERNAL_ERROR).send('Email já existe.')
      }
    } catch (erro) {
      next(erro)
    }
  }

  static autenticarUsuario = async (req, res, next) => {
    try {
      const { email, senha } = req.body
      const usuarioEncontrado = await usuarios.findOne({ email })
      if (!usuarioEncontrado) {
        res.status(HttpStatus.WRONG_DATA).send('Usuário não encontrado.')
      } else if (bcryptjs.compareSync(senha, usuarioEncontrado.senha)) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(HttpStatus.OK).send({ email, token })
      } else {
        res.status(HttpStatus.UNAUTHORIZED).send('Credenciais incorretas.')
      }
    } catch (erro) {
      next(erro)
    }
  }
}

export default UsuarioController
