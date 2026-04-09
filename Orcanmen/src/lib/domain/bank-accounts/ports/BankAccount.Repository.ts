import { ClientError, type Result } from '$lib';

export type BankAccount = {
	id: number;
	userId: string;
	name: string;
	color: string;
};

export type BankAccountSummary = {
	id: number;
	name: string;
};

export type NewBankAccount = Omit<BankAccount, 'id'>;

export interface BankAccountRepository {
	addUserBankAccount(account: NewBankAccount): Promise<Result<NewBankAccount, ClientError>>;
}