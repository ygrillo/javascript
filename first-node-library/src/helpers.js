function filterOcurrencies(paragraph) {
  return Object.keys(paragraph).filter((key) => paragraph[key] > 1)
}

function mountFileResult(wordList) {
  let finalText = ''
  wordList.forEach((paragraph, index) => {
    const duplicated = filterOcurrencies(paragraph)
    if (duplicated.length > 0) {
      const joinedWords = duplicated.join(', ')
      finalText += `palavras duplicadas no parágrafo: ${index + 1}: ${joinedWords} \n`
    }
  })
  return finalText
}

export { mountFileResult }