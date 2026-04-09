import { ApplicationError } from './ApplicationError';

export class ServerError extends ApplicationError {
	constructor(
		message: string = 'Internal Server Error',
		public readonly cause?: unknown
	) {
		super(message, 500);
	}
}
