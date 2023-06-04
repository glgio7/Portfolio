import axios, { AxiosError } from "axios";
import { useState } from "react";

export interface IState {
	succeeded: boolean;
	error: string;
	submitting: boolean;
}

export interface HandleSubmitProps {
	name: string;
	address: string;
	message: string;
}

export const useMail = () => {
	const [state, setState] = useState<IState>({
		submitting: false,
		succeeded: false,
		error: "",
	});

	const handleSubmit = async ({
		name,
		address,
		message,
	}: HandleSubmitProps) => {
		try {
			setState((prevState) => {
				return { ...prevState, submitting: true };
			});

			await axios.post("/api/sendmail", {
				name,
				address,
				message,
			});

			setState((prevState) => {
				return { ...prevState, submitting: false, succeeded: true };
			});

			return state;
		} catch (error: AxiosError | any) {
			console.log(error.response.data);
			setState({
				error: error.response.data,
				submitting: false,
				succeeded: false,
			});
		}
	};

	return { state, handleSubmit };
};
