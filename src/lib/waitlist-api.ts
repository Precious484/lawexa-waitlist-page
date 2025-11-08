/**
 * Lawexa Waitlist API Integration
 * Base URL: https://waitlistapi.lawexa.com/api
 */

const WAITLIST_API_BASE = 'https://waitlistapi.lawexa.com/api';

export interface WaitlistCountResponse {
  success: boolean;
  total_users: number;
}

export interface WaitlistJoinPayload {
  email: string;
  name?: string;
  'waitlist-ref'?: string;
}

export interface WaitlistJoinResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    email: string;
    name: string | null;
    referral_code: string;
    referral_link: string;
    position: number;
    total_referrals: number;
    created_at: string;
  };
}

export interface WaitlistErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Get the total number of users on the waitlist
 */
export async function getWaitlistCount(): Promise<WaitlistCountResponse> {
  const response = await fetch(`${WAITLIST_API_BASE}/waitlist/count`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch waitlist count: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Join the waitlist
 */
export async function joinWaitlist(payload: WaitlistJoinPayload): Promise<WaitlistJoinResponse> {
  const response = await fetch(`${WAITLIST_API_BASE}/waitlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data as WaitlistErrorResponse;
  }

  return data;
}

/**
 * Get referral statistics for a specific referral code
 */
export async function getReferralStats(referralCode: string) {
  const response = await fetch(`${WAITLIST_API_BASE}/waitlist/${referralCode}/stats`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch referral stats: ${response.statusText}`);
  }

  return response.json();
}
