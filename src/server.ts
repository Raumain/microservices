import cors from "cors";
import express from "express";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => {
	res.json({ message: "pong" });
});

app.listen(PORT, () => {
	console.log(`Serveur démarré sur le port ${PORT}`);
});
