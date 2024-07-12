import HttpStatus from '../httpStatus.js'
import jwt from 'jsonwebtoken'

async function autorizacao(req, res, next) {
  const autorizacao = req.headers.authorization
  if (!autorizacao) {
    res.status(HttpStatus.UNAUTHORIZED).send('Você não tem permissão para executar essa ação.')
    return
  }
  // esquema utilizado e o token
  const [_, token] = autorizacao.split(' ')
  jwt.verify(token, process.env.JWT_SECRET, (erro, decodificado) => {
    if (erro) {
      res.status(HttpStatus.UNAUTHORIZED).send('Você não tem permissão para executar essa ação.')
      return
    }
    req.email = decodificado.email
  })
  next()
}

export default autorizacao
