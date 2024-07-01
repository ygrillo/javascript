import { readFile } from 'node:fs/promises'

export function countWords(text) {
  const paragraphs = extractParagraphs(text)
  const counting = paragraphs.flatMap((paragraph) => {
    if (!paragraph) return []
    return verifyDuplicatedWords(paragraph)
  })
  return counting
}

function extractParagraphs(text) {
  return text
    .toLowerCase()
    .split('\n')
}

function bleachWords(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function verifyDuplicatedWords(text) {
  const listWords = text.split(' ')
  const result = {}
  listWords.forEach(word => {
    if (word.length >= 3) {
      const bleachedWord = bleachWords(word)
      result[bleachedWord] = (result[bleachedWord] || 0) + 1
    }
  })
  return result
}

const paths = [
  '../files/texto-kanban.txt',
  '../files/texto-web.txt',
  '../files/texto-aprendizado.txt',
]

export async function readMultipleFiles(pathsArray) {
  try {
    const promiseArray = pathsArray.map((path) => readFile(path, 'utf-8'))
    const dataArray = await Promise.all(promiseArray)
    return dataArray
  } catch (error) {
    throw error
  }
}

function promessa(boolean) {
  return new Promise((resolve, reject) => {
    if (!boolean) {
      reject(new Error('Falha na promessa'))
    }
    resolve('Sucesso na promessa')
  })
}

function showResponse(textResult) {
  console.log(textResult)
}

// promessa(false).then((result) => showResponse(result))
