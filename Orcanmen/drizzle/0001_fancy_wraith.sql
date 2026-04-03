CREATE TABLE "bank_account" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"color" text NOT NULL,
	CONSTRAINT "bank_account_name_unique" UNIQUE("name"),
	CONSTRAINT "bank_account_color_unique" UNIQUE("color")
);
--> statement-breakpoint
CREATE TABLE "permanent_transaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"transaction_id" integer NOT NULL,
	"bank_account_id" integer NOT NULL,
	"is_paused" boolean DEFAULT false NOT NULL,
	"stop_after_month" date
);
--> statement-breakpoint
CREATE TABLE "temp_transaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"transaction_id" integer NOT NULL,
	"bank_account_id" integer NOT NULL,
	"is_paused" boolean DEFAULT false NOT NULL,
	"month_concerned" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"amount" numeric(12, 2) NOT NULL,
	"label_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transaction_label" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"color" text NOT NULL,
	CONSTRAINT "transaction_label_name_unique" UNIQUE("name"),
	CONSTRAINT "transaction_label_color_unique" UNIQUE("color")
);
--> statement-breakpoint
DROP TABLE "task" CASCADE;--> statement-breakpoint
ALTER TABLE "permanent_transaction" ADD CONSTRAINT "permanent_transaction_transaction_id_transaction_id_fk" FOREIGN KEY ("transaction_id") REFERENCES "public"."transaction"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "permanent_transaction" ADD CONSTRAINT "permanent_transaction_bank_account_id_bank_account_id_fk" FOREIGN KEY ("bank_account_id") REFERENCES "public"."bank_account"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "temp_transaction" ADD CONSTRAINT "temp_transaction_transaction_id_transaction_id_fk" FOREIGN KEY ("transaction_id") REFERENCES "public"."transaction"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "temp_transaction" ADD CONSTRAINT "temp_transaction_bank_account_id_bank_account_id_fk" FOREIGN KEY ("bank_account_id") REFERENCES "public"."bank_account"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_label_id_transaction_label_id_fk" FOREIGN KEY ("label_id") REFERENCES "public"."transaction_label"("id") ON DELETE cascade ON UPDATE no action;