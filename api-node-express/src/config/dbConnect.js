import mongoose from 'mongoose'

mongoose.connect(process.env.STRING_CONNECTION_DB)

let db = mongoose.connection

export default db
