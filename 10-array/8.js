// 3️⃣ Check if Two Arrays Are Equal (Same Order)
let nums1 = [1, 2, 3,4,50,6,70,80,99,101];
let nums2 = [1, 2, 3,4,5,6,70,80,99,101];

const isBothArrayEqual = (arr1, arr2) => {
  //length
  if (arr1.length !== arr2.length) return false;
  for(let i=0;i<arr1.length;i++){
    if(arr1[i] !== arr2[i]) return false
  }
  return true
};

const result = isBothArrayEqual(nums1,nums2)
console.log({result});