import { Router } from "express";

export const useRouter = () => {
	const router = Router();

	router.get("/", (req, res) => {
		res.status(200).send("API running!");
	});

	return router;
};
