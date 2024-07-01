import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js"

async function paginar(req, res, next) {
  try {
    let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query

    let [campoOrdenacao, ordem] = ordenacao.split(":")
  
    limite = parseInt(limite)
    pagina = parseInt(pagina)
    ordem = parseInt(ordem)

    const resultado = req.resultado
  
    if (limite > 0 && pagina > 0 && [-1, 1].includes(ordem)) {
      const resultadoPaginado = await resultado.find()
        .sort({ [campoOrdenacao]: [ordem] })  // - 1 é decrescente, 1 é crescente
        .skip((pagina - 1) * limite )
        .limit(limite)
        .exec()
  
      res.status(200).json(resultadoPaginado)
    } else {
      next(new RequisicaoIncorreta())
    }
  } catch (erro) {
    next(erro)
  }
}

export default paginar