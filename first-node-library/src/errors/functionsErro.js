export default function treatErrors(error) {
  if (error.code === 'ENOENT') {
    throw new Error('File not found.')
  } else {
    return 'Erro na aplicação.'
  }
}