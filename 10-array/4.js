//  Remove All Duplicates From an Array (Use filter method)
const arr = [1, 2, 2, 3, 3,99, 4, 99, 9, 9, 9, 8, 7, 7, 7, 0, 0];

//first
const arrWithNoDuplicates = [];
const result = arr.filter((el) => {
  if (!arrWithNoDuplicates.includes(el)) {
    arrWithNoDuplicates.push(el);
    return true;
  }
});
console.log(result);

//first - better
//learn
const r2 = arr.filter((el, i, selfArr) => selfArr.indexOf(el) === i);
console.log({r2});



//second

const r3 = arr.reduce((acc,currentVal) => {
    if(!acc.includes(currentVal)) acc.push(currentVal)

    
    return acc

},[])

console.log({r3});