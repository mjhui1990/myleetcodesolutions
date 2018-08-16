// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

var rob = function(nums) {
  //start off with two accumulators we'll walk through the array one for the even index and one for the odd index
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < nums.length; i++) {
    //this if statement checks if its even or odd
    if (i % 2 === 0) {
        //if its even we compare if the  evenSum plus current index is greater than the odd sum
        // true evenSum is the the new value false evenSum becomes oddSum
      evenSum = Math.max(evenSum + nums[i], oddSum);
    } else {
      oddSum = Math.max(oddSum + nums[i], evenSum);
    }
  }
  return Math.max(evenSum, oddSum);
};
