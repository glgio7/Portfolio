import express from "express";
import dotenv from "dotenv";
import { useRouter } from "./routes";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());

app.use(
	cors({
		origin: ["http://localhost:5173", "https://glgio7.vercel.app/"],
		exposedHeaders: "Access-Control-Allow-Origin",
	})
);

app.use("/api", useRouter());

app.listen(port, () => {
	console.log("Server is running!");
});
