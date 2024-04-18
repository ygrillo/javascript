import mongoose from "mongoose";

async function connectToDatabase() {
    mongoose.connect(
        "mongodb+srv://yugrillo4:SPpAQGoGKezHn0nQ@cluster0.s9i5e8i.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"
    );
    return mongoose.connection;
}

export default connectToDatabase;
