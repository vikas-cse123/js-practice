const arr = [1, 2, 3, 4, 5,6,7,8,9,10];

const reverseArray = (arr) => {
  const reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i])
  }
  return reverseArray
};

const result = reverseArray(arr);
console.log(result);

//Second 
const r2 = [...arr].reverse()
console.log({r2});

