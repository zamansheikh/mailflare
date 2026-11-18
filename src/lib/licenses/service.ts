import type { LicenseEntitlements } from "./types";

/**
 * This fork does not sell licenses: every installation has the Team entitlements
 * (custom branding, unlimited accounts, shared mailboxes and account forwarding).
 * Callers still go through this function, so the gates stay in one place.
 */
const TEAM_ENTITLEMENTS: LicenseEntitlements = {
	plan: "team",
	canCustomizeBranding: true,
	canManageAccounts: true,
	canShareMailboxes: true,
	accountSeatLimit: null,
	canForwardEmail: true,
};

export async function getLicenseEntitlements(_env: CloudflareEnv): Promise<LicenseEntitlements> {
	return TEAM_ENTITLEMENTS;
}
