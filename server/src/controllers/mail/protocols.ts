import { IMail } from "../../models/mail";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ISendMailController {
	handle(httpRequest: HttpRequest<IMail>): Promise<HttpResponse<IMail>>;
}

export interface ISendMailRepository {
	sendMail(params: IMail): Promise<HttpResponse<IMail>>;
}
