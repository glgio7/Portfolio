import { ISendMailRepository } from "../controllers/mail/protocols";
import SMTP_CONFIG from "../config/smtp";
import nodemailer, { TransportOptions } from "nodemailer";
import { HttpResponse } from "../controllers/protocols";
import Mail from "nodemailer/lib/mailer";
import { IMail } from "../models/mail";

export class SendMailRepository implements ISendMailRepository {
	private readonly transporter: Mail;

	constructor() {
		this.transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: SMTP_CONFIG.user,
				pass: SMTP_CONFIG.pass,
			},
		} as TransportOptions);
	}

	async sendMail(params: IMail): Promise<HttpResponse<IMail>> {
		const title = "<h2>Email de contato:</h2><br/>";
		const message = "<h2>Mensagem:</h2><br/>";

		await this.transporter.sendMail({
			to: {
				name: "Admin",
				address: process.env.NODEMAILER_MAILRECEIVER!,
			},
			from: { name: "GLGIO7 Portfolio", address: params.address },
			subject: `${params.name} entrou em contato!`,
			html: `${title}${params.address}${message}${params.message}`,
		});

		return {
			statusCode: 200,
			body: "Email enviado com sucesso!",
		};
	}
}
