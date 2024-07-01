import mongoose from "mongoose"
import autopopulate from "mongoose-autopopulate"

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do livro é obrigatório."]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores", 
      required: [true, "O(A) autor(a) do livro é obrigatório."],
      autopopulate: { select: "nome" }  // ou usar somente true
    },
    editora: {
      type: String, 
      required: [true, "O nome da editora é obrigatório."],
      enum: {
        values: ["Rocco", "Agir"],
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000
        },
        message: "O número de páginas deve estar entre 10 e 5000. Você digitou {VALUE}"
      }
    }
  }
)

livroSchema.plugin(autopopulate)

const livros = mongoose.model("livros", livroSchema)

export default livros