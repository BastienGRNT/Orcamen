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
	getAllUserBankAccounts(userId: string): Promise<BankAccount[]>;
	addUserBankAccount(account: NewBankAccount): Promise<BankAccount>;
	getUserBankAccountSummaries(userId: string): Promise<BankAccountSummary[]>;
}