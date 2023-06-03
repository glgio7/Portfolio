import { Router } from "express";
import { SendMailController } from "./controllers/mail/send-mail";
import { SendMailRepository } from "./repositories/nodemailer-send-mail";

export const useRouter = () => {
	const router = Router();

	router.post("/sendmail", async (req, res) => {
		const sendMailRepository = new SendMailRepository();
		const sendMailController = new SendMailController(sendMailRepository);

		const { body, statusCode } = await sendMailController.handle({
			body: req.body,
		});

		res.status(statusCode).send(body);
	});

	router.get("/", (req, res) => {
		res.status(200).send("API running!");
	});

	return router;
};
