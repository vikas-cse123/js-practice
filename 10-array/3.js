//first - wrong
const isArrSorted = (arr) => {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      } else {
        result = true;
      }
    }
  }
  return result;
};

const result = isArrSorted([1, 2, 3, 9]);
console.log(result);

//first-updated
const isArraySorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i+1]){
        return false

    }
  }
  return true
};

const r2 = isArraySorted([10,20,30,400,50,60,70,80,90,100])
console.log(r2);