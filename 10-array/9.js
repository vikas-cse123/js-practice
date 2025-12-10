// Count Even and Odd Numbers in an Array
const nums = [2, 5, 7, 8, 10,11,12,13,14,15,16,17,18]
const evenOddCountInArr = (arr) => {
    let even = 0
    let odd = 0
    for(const num of arr){
        if(num % 2 === 0){
            even +=1

        }else{
            odd+=1
        }
    }
return {even,odd}
}

const r = evenOddCountInArr(nums)
console.log(r);
