import type { AppDatabase } from "@/db";

/** Mailbox sharing is always available in this fork (no Team license check). */
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
