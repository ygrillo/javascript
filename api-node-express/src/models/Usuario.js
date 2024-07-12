import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
  {
    id: { type: String },
    email: {
      type: String,
      required: [true, 'O email é obrigatório.']
    },
    senha: {
      type: String,
      required: [true, 'A senha é obrigatória.']
    }
  },
  {
    versionKey: false
  }
)

const usuarios = mongoose.model('usuarios', usuarioSchema)

export default usuarios
