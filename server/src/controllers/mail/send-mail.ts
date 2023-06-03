import { IMail } from "../../models/mail";
import { SendMailRepository } from "../../repositories/nodemailer-send-mail";
import { HttpRequest, HttpResponse } from "../protocols";
import { ISendMailController } from "./protocols";

export class SendMailController implements ISendMailController {
	constructor(private readonly sendMailRepository: SendMailRepository) {}

	async handle(httpRequest: HttpRequest<IMail>): Promise<HttpResponse<IMail>> {
		try {
			const requiredFields = ["name", "address", "message"];

			for (const field of requiredFields) {
				if (!httpRequest.body?.[field as keyof IMail]) {
					return {
						statusCode: 400,
						body: `Field ${field} is required`,
					};
				}
			}

			const sentMail = await this.sendMailRepository.sendMail(
				httpRequest.body!
			);

			return sentMail;
		} catch (error) {
			return {
				statusCode: 500,
				body: `Bad request, ${error}`,
			};
		}
	}
}
