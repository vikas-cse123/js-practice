const arr = [15, 40, 65, 51, 56, 24, 49, 21, 59, 35, 111, 5, 5];

//first

const minMaxFromArr = (arr) => {
  if (arr.length === 0) return;

  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return { max, min };
};

// Second
const maximum = Math.max(...arr);
const minimum = Math.min(...arr);
console.log({ maximum, minimum });

// Third

const result = arr.reduce(
  (acc, currentValue) => {
    if (currentValue > acc.max) {
      acc.max = currentValue;
    }
    if (currentValue < acc.min) {
      acc.min = currentValue;
    }
    return acc;
  },
  { min: arr[0], max: arr[0] }
);
console.log({ result });



//chatgpt
const result2 = arr.reduce(
  (acc, n) => ({
    max: n > acc.max ? n : acc.max,
    min: n < acc.min ? n : acc.min
  }),
  { max: arr[0], min: arr[0] }
);
