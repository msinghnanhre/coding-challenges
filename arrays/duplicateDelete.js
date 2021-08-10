// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const deleteDuplicates = (nums) => {
    return nums.map((item, index) => {
        if (index !== nums.lastIndexOf(item) ) {
            nums.splice(index, nums.lastIndexOf(item)-index)
        }
        return item
    })
    // nums = [...new Set(nums)]
    // return nums.length
}

console.log(deleteDuplicates(nums))
// // nums.splice(2, 2)
// //console.log(nums.lastIndexOf(1))






