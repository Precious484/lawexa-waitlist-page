/**
 * Waitlist API Service
 * Handles all interactions with the Lawexa Waitlist API
 */

const API_BASE_URL = 'https://waitlistapi.lawexa.com/api';

// Type definitions based on API documentation
export interface WaitlistJoinRequest {
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

export interface ReferralStatsResponse {
  success: boolean;
  data: {
    total_referrals: number;
    referral_code: string;
    referral_link: string;
    position: number;
  };
}

export interface ApiErrorResponse {
  message: string;
  errors?: {
    [key: string]: string[];
  };
}

/**
 * Join the waitlist
 */
export async function joinWaitlist(
  data: WaitlistJoinRequest
): Promise<WaitlistJoinResponse> {
  const response = await fetch(`${API_BASE_URL}/waitlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw {
      status: response.status,
      ...result,
    };
  }

  return result;
}

/**
 * Get referral statistics for a referral code
 */
export async function getReferralStats(
  referralCode: string
): Promise<ReferralStatsResponse> {
  const response = await fetch(
    `${API_BASE_URL}/waitlist/${referralCode}/stats`,
    {
      headers: {
        'Accept': 'application/json',
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw {
      status: response.status,
      ...result,
    };
  }

  return result;
}

/**
 * Extract referral code from URL query parameters
 */
export function getReferralCodeFromUrl(): string | null {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  return params.get('waitlist-ref');
}
