import { ClientError } from '$lib';

export class BankAccountNameAlreadyExistsError extends ClientError {
	constructor(name: string) {
		super(`Vous possédez déjà un compte bancaire nommé "${name}".`);
	}
}
