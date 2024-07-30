const arr = [13,42,33,7,18,9]
//@find the largest number of array
let largestNumber = arr[0];
for (let i=0; i < arr.length; i++){
    if (arr[i] > largestNumber){                 
        largestNumber = arr[i]
    }
}
console.log (largestNumber);

///@find the smallest number of array

let smallestNumber = arr[0];
for (let i=0; i < arr.length; i++){
    if (arr[i] < smallestNumber){
        smallestNumber = arr[i];
    }
}
console.log (smallestNumber);
