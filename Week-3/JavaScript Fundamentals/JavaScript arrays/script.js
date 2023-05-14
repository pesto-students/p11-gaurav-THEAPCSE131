let evenNums = [];
let oddNums = [];

function divideArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      oddNums.push(nums[i]);
    } else {
      evenNums.push(nums[i]);
    }
  }

  evenNums.sort();
  oddNums.sort();
}
//=======================
let nums = [4, 2, 8];
divideArray(nums);

//=======================
console.log("Odd numbers:");
if (oddNums.length === 0) {
  console.log("None");
} else {
  for (let i = 0; i < oddNums.length; i++) {
    console.log(oddNums[i]);
  }
}
//=======================
console.log("Even numbers:");
if (evenNums.length === 0) {
  console.log("None");
} else {
  for (let i = 0; i < evenNums.length; i++) {
    console.log(evenNums[i]);
  }
}
//=======================
