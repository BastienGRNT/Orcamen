import type { BankAccountRepository } from '../ports/BankAccount.Repository';
import type { AddBankAccountViewModel } from '$lib/domain/bank-accounts/models/BankAccount.ViewModel';

export type AddBankAccountCommand = {
	userId: string;
	name: string;
	color: string;
};

export class AddUserBankAccountUseCase {
	constructor(private readonly repository: BankAccountRepository) {}

	async execute(command: AddBankAccountCommand): Promise<AddBankAccountViewModel> {
		const newBankAccount = await this.repository.addUserBankAccount({
			userId: command.userId,
			name: command.name,
			color: command.color
		});

		return {
			id: newBankAccount.id,
			name: newBankAccount.name,
			color: newBankAccount.color,
		}
	}
}
