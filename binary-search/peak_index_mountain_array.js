/* 
An array arr is a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

 

Example 1:

Input: arr = [0,1,0]
Output: 1
Example 2:

Input: arr = [0,2,1,0]
Output: 1
Example 3:

Input: arr = [0,10,5,2]
Output: 1

 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let s = 0,
        e = arr.length - 1;

    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2);

        if (arr[m] > arr[m - 1] && arr[m] > arr[m + 1]) {
            return m;
        }

        if (arr[m] < arr[m + 1]) {
            s = m + 1;
        } else if (arr[m] > arr[m + 1]) {
            e = m - 1;
        }
    }
    return -1;
};

const arr = [0, 10, 13, 15, 11, 5, 2];
const arr2 = [0, 10, 13, 15, 11, 5];
const arr3 = [0, 10, 13, 15, 17, 18, 20, 11, 5, 2];

console.log(peakIndexInMountainArray(arr));