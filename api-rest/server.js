import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando!");
    console.log("Acesse por http://localhost:3000")
});
