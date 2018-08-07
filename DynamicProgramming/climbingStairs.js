const climbStairs = (n, cache = new Map()) => {
  if (n <= 2) return n;
  if (cache[n]) return cache[n];
  else {
    let result = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
    cache[n] = result;
    return result;
  }
};
