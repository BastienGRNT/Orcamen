import type { BankAccountRepository } from '../ports/BankAccount.Repository';
import type { AddBankAccountViewModel } from '$lib/domain/bank-accounts/models/BankAccount.ViewModel';
import { ClientError, isFailure, type Result, success } from '$lib';

export type AddBankAccountCommand = {
	userId: string;
	name: string;
	color: string;
};

export class AddUserBankAccountUseCase {
	constructor(private readonly repository: BankAccountRepository) {}

	async execute(command: AddBankAccountCommand): Promise<Result<AddBankAccountViewModel, ClientError>> {
		const result = await this.repository.addUserBankAccount({
			userId: command.userId,
			name: command.name,
			color: command.color
		});

		if (isFailure(result)) {
			return result;
		}

		const viewModel: AddBankAccountViewModel = {
			name: result.data.name,
			color: result.data.color
		};

		return success(viewModel);
	}
}