import { ApplicationError } from './ApplicationError';

export class ClientError extends ApplicationError {
	constructor(message: string, statusCode: number = 400) {
		super(message, statusCode);
	}
}
