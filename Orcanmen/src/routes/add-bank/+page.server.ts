import { DrizzleBankAccountRepository } from '$lib/domain/bank-accounts/adapters/BankAccount.Repository.Drizzle';
import { AddUserBankAccountUseCase } from '$lib/domain/bank-accounts/use-cases/AddUserBankAccount.UseCase';
import { ClientError, toActionResponse } from '$lib';


export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		if (!locals.user) {
			throw new ClientError("test")
		}

		const command = {
			userId: locals.user.id,
			name: formData.get('name') as string,
			color: '#FF5733'
		};

		const repository = new DrizzleBankAccountRepository();
		const useCase = new AddUserBankAccountUseCase(repository);

		const result = await useCase.execute(command);

		return toActionResponse(result);
	}
};
