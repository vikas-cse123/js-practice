// Find All Unique Pairs Whose Sum Equals a Target
const getPairs = (arr, target) => {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i]+arr[j] === target ){
            pairs.push([arr[i],arr[j]])
        }
    }
  }
  return pairs
};
const result = getPairs([1, 2, 3, 4,5],6)
console.log(result);