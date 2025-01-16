def count_differences(N):
    count = 0
    p = 1
    while p <= N:
        # For every power of 10 (10^p), the numbers in range [5 * 10^p, 10^(p+1) - 1]
        # will be the ones where normal rounding and chain rounding diverge.
        start = 5 * p
        end = 10 * p - 1
        if start <= N:
            count += min(N, end) - start + 1
        p *= 10
    return count

def solve():
    T = int(input())  # Number of test cases
    for _ in range(T):
        N = int(input())  # The value of N for each test case
        print(count_differences(N))

# Example usage:
solve()