ALTER TABLE "temp_transaction" RENAME COLUMN "is_paused" TO "is_weekly_transaction";--> statement-breakpoint
ALTER TABLE "bank_account" DROP CONSTRAINT "bank_account_name_unique";--> statement-breakpoint
ALTER TABLE "bank_account" DROP CONSTRAINT "bank_account_color_unique";--> statement-breakpoint
ALTER TABLE "transaction_label" DROP CONSTRAINT "transaction_label_name_unique";--> statement-breakpoint
ALTER TABLE "transaction_label" DROP CONSTRAINT "transaction_label_color_unique";--> statement-breakpoint
ALTER TABLE "bank_account" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "permanent_transaction" ADD COLUMN "is_weekly_transaction" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction_label" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transaction_label" ADD CONSTRAINT "transaction_label_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_user_id_name_unique" UNIQUE("user_id","name");--> statement-breakpoint
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_user_id_color_unique" UNIQUE("user_id","color");--> statement-breakpoint
ALTER TABLE "transaction_label" ADD CONSTRAINT "transaction_label_user_id_name_unique" UNIQUE("user_id","name");--> statement-breakpoint
ALTER TABLE "transaction_label" ADD CONSTRAINT "transaction_label_user_id_color_unique" UNIQUE("user_id","color");