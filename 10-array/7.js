//  Rotate an Array to the Right by K Steps
const nums = [1, 2, 3, 4, 5];

const rotateArrByKSteps = (arr, k) => [...arr.slice(-k), ...arr.slice(0, -k)];

const r1 = rotateArrByKSteps(nums, 2);
console.log({r1});
