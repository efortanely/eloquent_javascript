function range(start, end, step = 1) {
  let ans = [];
  for (let i = start; step >= 0 ? i <= end : i >= end; i += step) {
    ans = ans.concat(i);
  }
  return ans;
}

function sum(nums) {
  if (nums) {
    return nums.reduce((prev, curr) => prev + curr);
  }
}

console.log(range(1, 10));
console.log(sum(range(5, 2, -1)));
