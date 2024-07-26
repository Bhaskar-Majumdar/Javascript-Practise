//Assignment Operator
console.log('Assingment Operator');
let aso = 10, a=20, b=10;

console.log("a = " + aso);
aso += 5;
console.log("a += " + aso);
aso -= 5;
console.log("a -= " + aso);
aso *= 5;
console.log("a *= " + aso);
aso /= 5;
console.log("a /= " + aso);
aso %= 4;
console.log("a %= " + aso);

//Relational Operator
let m = 10, n = 20, p = 10;
console.log(m + " > " + n + " = " + (m > n));
console.log(m + " < " + n + " = " + (m < n));
console.log(m + " >= " + p + " = " + (m >= p));
console.log(m + " <= " + n + " = " + (m <= n));
console.log(m + " = " + n + " = " + (m == n));
console.log(m + " != " + n + " = " + (m != n));
console.log(m + " != " + p + " = " + (m != p));

//logical Operator
let j = 20, l = 100;

let operation = (j > 30) && (l < 150)
console.log("("+ j + " > 30) && ("+ l + " < 150) == " + operation);

operation = (j > 30) || (l < 150)
console.log("("+ j + " > 30) || ("+ l + " < 150) == " + operation);
