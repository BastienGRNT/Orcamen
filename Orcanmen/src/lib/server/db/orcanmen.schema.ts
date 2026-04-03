import { boolean, date, integer, numeric, pgTable, serial, text, unique } from 'drizzle-orm/pg-core';
import { user } from '$lib/server/db/auth.schema';

export const bankAccount = pgTable('bank_account', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	name: text('name').notNull(),
	color: text('color').notNull()
}, (t) => ({
	uniqueNamePerUser: unique().on(t.userId, t.name),
	uniqueColorPerUser: unique().on(t.userId, t.color)
}));

export const transactionLabel = pgTable('transaction_label', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	name: text('name').notNull(),
	color: text('color').notNull()
}, (t) => ({
	uniqueNamePerUser: unique().on(t.userId, t.name),
	uniqueColorPerUser: unique().on(t.userId, t.color)
}));

export const transaction = pgTable('transaction', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, { onDelete: 'cascade' }),
	name: text('name').notNull(),
	description: text('description'),
	amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
	labelId: integer('label_id')
		.notNull()
		.references(() => transactionLabel.id, { onDelete: 'cascade' })
});

export const permanentTransaction = pgTable('permanent_transaction', {
	id: serial('id').primaryKey(),
	transactionId: integer('transaction_id')
		.notNull()
		.references(() => transaction.id, { onDelete: 'cascade' }),
	bankAccountId: integer('bank_account_id')
		.notNull()
		.references(() => bankAccount.id, { onDelete: 'cascade' }),
	isWeeklyTransaction: boolean('is_weekly_transaction').default(false).notNull(),
	stopAfterMonth: date('stop_after_month', { mode: 'date' }),
	isPaused: boolean('is_paused').default(false).notNull()
});

export const tempTransaction = pgTable('temp_transaction', {
	id: serial('id').primaryKey(),
	transactionId: integer('transaction_id')
		.notNull()
		.references(() => transaction.id, { onDelete: 'cascade' }),
	bankAccountId: integer('bank_account_id')
		.notNull()
		.references(() => bankAccount.id, { onDelete: 'cascade' }),
	isWeeklyTransaction: boolean('is_weekly_transaction').default(false).notNull(),
	monthConcerned: date('month_concerned', { mode: 'date' }).notNull()
});