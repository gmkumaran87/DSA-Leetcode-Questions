/** Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 * Pattern:
 * 1. Use function isAnagram to know word is anagram or not.
 * 2. Use Hash map to sort the words and store as key
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashMap = new Map();
  let outArr = [];
  for (var i = 0; i < strs.length; i++) {
    let currStr = strs[i];
    let newArr = currStr.split("").sort();
    let newStr = newArr.join("");

    if (hashMap.has(newStr)) {
      let value = hashMap.get(newStr);
      hashMap.set(newStr, [...value, currStr]);
    } else {
      hashMap.set(newStr, [currStr]);
    }
  }

  for (let [key, value] of hashMap) {
    console.log(key, value);
    outArr.push(value);
  }

  return outArr;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log("groupAnagrams", groupAnagrams(strs));
