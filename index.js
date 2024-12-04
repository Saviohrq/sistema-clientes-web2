import express from "express";
const app = express();

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + "/src/main.html");
});

app.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001");
});