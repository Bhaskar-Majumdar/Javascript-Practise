const arr1 = new Array(10);
for (let i = 0; i<arr1.length; i++){
    arr1[i] = true;
}
console.log (arr1);

//@Array fill
const arr2 = new Array(10);
arr2.fill(0);
console.log (arr2);

const names = ['Nayem', 'Rahim', 'Adil']
names[0] = 'Abul';
names[2] = 'Mukit';

console.log(names);

//@ Fill Array and Update
const response = new Array (9);
response.fill(false);

for (let i = 0; i < response.length; i++){
    const rand = Math.floor(Math.random() * 10 + 1)
    response[i] = rand > 5 ? 'X' : '0';
}
console.log (response);

/////////////@Array Function

const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const times = (a,b) => a * b;

const funcs = [sum, sub, times];
const a = 10, b = 20;

for (let i = 0; i < funcs.length; i++){
    const result = funcs[i](a, b);
    console.log (`[${funcs[i].name}] Result = ${result}`);
}

////@ Multi Dimensional Array 
const pointTable = [
    [0,0], [3,5], [5,7], [10,23]
];

// For one dimensional Array
for (let i = 0; i < pointTable.length; i++){
//    console.log (`Point ${i} -> X = ${pointTable [i] [0]} and Y = ${pointTable [i][1]}`);  
}  


// For two dimensional Array
const numbers = [
    [1,2,3], [4,5,6], [7,8,9]
];
for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers[i].length; j++){
      //  console.log (numbers[i][j]);
    }
}

for (let i = 0; i < pointTable.length; i++){
    for (let j = 0; j < pointTable[i].length; j++){
        console.log (`Points [${i}, ${j}] = ${pointTable[i][j]}`);
    }
}


