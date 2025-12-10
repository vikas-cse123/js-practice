// 7️⃣ Count How Many Times an Element Appears in an Array

const array = [1, 4, 4, 2,4, 2]

const countSpecificElementOccurence = (arr,el) => {
    let count = 0
    for(const element of arr){
        if(el === element) count++
    }

    return count

}
const result = countSpecificElementOccurence(array,2)
console.log(result);
