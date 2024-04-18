import mongoose from "mongoose";

async function connectToDatabase() {
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PSWD}@cluster0.s9i5e8i.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0`
    );
    return mongoose.connection;
}

export default connectToDatabase;
