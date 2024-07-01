import { readFile } from 'node:fs'
import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import treatErrors from './errors/functionsErro.js'
import { mountFileResult } from './helpers.js'
import { countWords } from './index.js'
import { Command } from 'commander'

const program = new Command()

program
  .version('0.0.1')
  .option('-t, --text <string>', 'text path to be processed')
  .option('-d, --destiny <string>', 'file path where to save result')
  .action((options) => {
    const { text, destiny } = options

    if (!text || !destiny) {
      console.error('Erro. Favor inserir caminho de origem e destino.')
      program.help()
      return
    }

    const textPath = path.resolve(text)
    const destinyPath = path.resolve(destiny)

    try {
      processFile(textPath, destinyPath)
      console.log('Texto processado com sucesso!')
    } catch (error) {
      console.error('Ocorreu um erro no processamento', error)
    }
  })

program.parse()

function processFile(text, destiny) {
  readFile(text, 'utf-8', (error, text) => {
    try {
      if(error) throw error
      const result = countWords(text)
      createAndSaveFile(result, destiny)
    } catch(error) {
      treatErrors(error)
    }
  })
}

// async function createAndSaveFile(wordList, path) {
//   const newFile = `${path}/resultado.txt`
//   const textWords = JSON.stringify(wordList)

//   try {
//     await writeFile(newFile, textWords)
//     console.log('Arquivo criado.')
//   } catch(erro) {
//     throw erro
//   }
// }

function createAndSaveFile(wordList, resultPath) {
  const newFile = `${resultPath}/resultado.txt`
  const textWords = mountFileResult(wordList)

  writeFile(newFile, textWords)
    .then(() => console.log('Arquivo criado.'))
    .catch((erro) => {
      throw erro
    })
    .finally(() => console.log('Operação finalizada.'))
}
