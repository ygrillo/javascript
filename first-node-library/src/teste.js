const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

async function addOne(number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(number + 1), 1000)
  })
}

async function readMultipleNumbers(numbersArray) {
  try {
    const promiseArray = numbersArray.map((number) => addOne(number))
    const rewrittenNumbers = await Promise.all(promiseArray)
    return rewrittenNumbers
  } catch (error) {
    throw error
  }
}

readMultipleNumbers(exampleArray).then((result) => console.log(result))