const nums = [2, 11, 15, 7];

const target = 9;

// Brute Force Approach
// Time Complexity:  O(n^2) — nested loops checking every pair
// Space Complexity: O(1)   — no extra data structures used


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum(nums, target))


// Optimized Approach (Hash Map)
// Time Complexity:  O(n) — single pass through the array
// Space Complexity: O(n) — storing up to n elements in the Map
function twoSumFast(nums, target) {
    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        let rem = target - nums[i];
        if (mp.has(rem)) {

            return [mp.get(rem), i];
        }

        else {
            mp.set(nums[i], i)
        }
    }
}

console.log(twoSumFast(nums, target))