/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  // Prefix sum of the time spent for each house
  let timeArr = [];

  timeArr[0] = travel[0];

  for (let i = 1; i < travel.length; i++) {
    timeArr[i] = timeArr[i - 1] + travel[i];
  }

  const gPrefixArr = getCharPrefixArray(garbage, "G");
  const pPrefixArr = getCharPrefixArray(garbage, "P");
  const mPrefixArr = getCharPrefixArray(garbage, "M");

  console.log("garbage", { timeArr, mPrefixArr, pPrefixArr, gPrefixArr });
  const gTotal = getTotalTime(gPrefixArr, timeArr);
  const pTotal = getTotalTime(pPrefixArr, timeArr);
  const mTotal = getTotalTime(mPrefixArr, timeArr);

  console.log("After total", { gTotal, mTotal, pTotal });

  return gTotal + mTotal + pTotal;
};

function getTotalTime(garbageArr, timeArr) {
  let total = 0;
  for (let i = garbageArr.length - 1; i >= 0; i--) {
    if (i === 0 && garbageArr[0] !== 0) {
      total = garbageArr[0];
    } else if (garbageArr[i] !== 0) {
      total = garbageArr[i] + timeArr[i - 1];
      return total;
    }
  }
  return total;
}
function countCharacter(string, char) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (char === string[i]) count++;
  }
  return count;
}

function getCharPrefixArray(garbage, strChar) {
  let garbageArr = [];
  garbageArr[0] = countCharacter(garbage[0], strChar);
  let pCount = garbageArr[0];
  for (let i = 1; i < garbage.length; i++) {
    if (garbage[i].includes(strChar) && garbage[i - 1].includes(strChar)) {
      garbageArr[i] = garbageArr[i - 1] + countCharacter(garbage[i], strChar);
      pCount = garbageArr[i];
    } else if (
      garbage[i].includes(strChar) &&
      !garbage[i - 1].includes(strChar)
    ) {
      garbageArr[i] = pCount + countCharacter(garbage[i], strChar);
      pCount = garbageArr[i];
    } else {
      garbageArr[i] = 0;
    }
  }
  return garbageArr;
}
// const garbage = ["MMM", "PGM", "GP"];
// const travel = [3, 10];

const garbage = ["G", "M"];
const travel = [1];

console.log("Garbage collection", garbageCollection(garbage, travel));
