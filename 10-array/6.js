let arr = [10, 20, 4000, 1405, 9209];

const getSecondLargestNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let greaterCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        greaterCount += 1;
      }
    }
    if (greaterCount === 1) {
      return arr[i];
    }
  }
};

const r = getSecondLargestNum(arr);
console.log({ r });

//second

const getSecondLargestNumber = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest
      largest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest
};
const r2 = getSecondLargestNumber(arr)
console.log({r2});