import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getWaitlistCount } from '@/lib/waitlist-api';

const WAITLIST_COUNT_QUERY_KEY = ['waitlist', 'count'];

/**
 * Custom hook to fetch and manage waitlist count
 * Features:
 * - Automatic refetching every 30 seconds
 * - Cache management via TanStack Query
 * - Loading and error states
 */
export function useWaitlistCount() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: WAITLIST_COUNT_QUERY_KEY,
    queryFn: getWaitlistCount,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000, // Consider data stale after 10 seconds
    retry: 3, // Retry failed requests 3 times
    retryDelay: 1000, // Wait 1 second between retries
  });

  const invalidateCount = () => {
    queryClient.invalidateQueries({ queryKey: WAITLIST_COUNT_QUERY_KEY });
  };

  const refetchCount = () => {
    return query.refetch();
  };

  return {
    totalUsers: query.data?.total_users ?? 0,
    slotsLeft: Math.max(0, 1500 - (query.data?.total_users ?? 0)),
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    invalidateCount,
    refetchCount,
  };
}

/**
 * Hook to manually invalidate waitlist count cache
 * Use this after a successful waitlist signup
 */
export function useInvalidateWaitlistCount() {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({ queryKey: WAITLIST_COUNT_QUERY_KEY });
  };
}
