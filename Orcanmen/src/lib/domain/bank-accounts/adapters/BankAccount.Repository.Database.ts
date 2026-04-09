import { db } from '$lib/server/db';
import { bankAccount } from '$lib/server/db/orcanmen.schema';
import { eq } from 'drizzle-orm';
import type {
	BankAccount,
	BankAccountRepository,
	BankAccountSummary,
	NewBankAccount
} from '$lib/domain/bank-accounts/ports/BankAccount.Repository';

export class DrizzleBankAccountRepository implements BankAccountRepository {
	async getAllUserBankAccounts(userId: string): Promise<BankAccount[]> {
		return db.select().from(bankAccount).where(eq(bankAccount.userId, userId));
	}

	async addUserBankAccount(account: NewBankAccount): Promise<BankAccount> {
		const [newAccount] = await db.insert(bankAccount).values(account).returning();
		return newAccount;
	}

	async getUserBankAccountSummaries(userId: string): Promise<BankAccountSummary[]> {
		return db
			.select({
				id: bankAccount.id,
				name: bankAccount.name,
			})
			.from(bankAccount)
			.where(eq(bankAccount.userId, userId));
	}
}
