/*

268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.


Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.


Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

*/

/**
 * @param {number[]} nums [9,6,4,2,3,5,7,0,1]
 * @return {number} num 8
 */
var missingNumber = function(nums) {
    for(let num =0;num<=nums.length;num++){
        if(!nums.includes(num)){
            return num
        }
    }
};


/* from discussions section 

Intuition
The code uses the concept of the sum of an arithmetic series to find the missing number. It assumes that the array nums contains numbers from 0 to n (inclusive) with one missing number.

Approach
Initialize a variable n as the length of the array nums plus 1, assuming that the missing number is the last number in the sequence.

Calculate the expected sum of the sequence from 0 to n (inclusive) using the formula (n * (n - 1)) / 2.

Iterate over each number in nums and subtract it from the total variable, which represents the expected sum.

After the loop, the total will contain the missing number.

Return the value of total.

Complexity
Time complexity:

O(n), where n is the length of the input array nums. The code iterates over all the elements once.
Space complexity:

O(1). The code uses a constant amount of extra space to store the variables n and total, regardless of the input size.

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function(nums) {
    let n = nums.length + 1;
    let total = (n * (n-1)) / 2;
    
    for (let num of nums) {
        total -= num;
    }
    
    return total;
};


console.log(missingNumber([3,0,1]))