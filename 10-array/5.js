const nums = [1, 2, 3]
const nums2 = [4, 5]

const mergeTwoArr = (arr1,arr2) => {
    const arr = []
    for(const el of arr1){
        arr.push(el)
    }

       for(const el of arr2){
        arr.push(el)
    }
 
 
return arr
}

const result = mergeTwoArr(nums,nums2)
console.log(result);