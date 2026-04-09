import { db } from '$lib/server/db';
import { bankAccount } from '$lib/server/db/orcanmen.schema';
import type {
	BankAccount,
	BankAccountRepository,
	NewBankAccount
} from '$lib/domain/bank-accounts/ports/BankAccount.Repository';
import { ClientError, failure, type Result, ServerError, success } from '$lib';
import { PostgresErrorCode } from '$lib/server/db/PostgresErrorCodes';
import {
	BankAccountNameAlreadyExistsError
} from '$lib/domain/bank-accounts/errors/BankAccountNameAlreadyExists.Error';

export class DrizzleBankAccountRepository implements BankAccountRepository {
	async addUserBankAccount(account: NewBankAccount): Promise<Result<BankAccount, ClientError>> {
		try {
			const [newAccount] = await db.insert(bankAccount).values(account).returning();
			return success(newAccount);
		} catch (error: any) {
			if (error?.cause?.code === PostgresErrorCode.UNIQUE_VIOLATION) {
				return failure(new BankAccountNameAlreadyExistsError(account.name));
			}
			throw new ServerError('Erreur lors de la création du compte {} en base de données', error);
		}
	}
}
