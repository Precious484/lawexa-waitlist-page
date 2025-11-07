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
  console.log('Sending waitlist request to:', `${API_BASE_URL}/waitlist`);
  console.log('Request data:', data);

  try {
    const response = await fetch(`${API_BASE_URL}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    let result;
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
      console.log('Response data:', result);
    } else {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      throw {
        status: response.status,
        message: 'Server returned non-JSON response',
        text: text,
      };
    }

    if (!response.ok) {
      console.error('API error response:', result);
      throw {
        status: response.status,
        ...result,
      };
    }

    return result;
  } catch (error) {
    console.error('Fetch error:', error);
    // Re-throw if it's already our custom error
    if (error && typeof error === 'object' && 'status' in error) {
      throw error;
    }
    // Otherwise wrap it
    throw {
      status: 0,
      message: error instanceof Error ? error.message : 'Network error occurred',
      originalError: error,
    };
  }
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
