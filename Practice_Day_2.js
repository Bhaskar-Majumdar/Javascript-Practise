//Convert Hours into Seconds
function howManySeconds (hours) {
    var seconds = hours * 3600;
    return seconds;
}
console.log('howManySeconds(10) ==> ', howManySeconds(10));


//Return Something to Me!
function giveMeSomething(a) {
    let text1 = "something";
    let result = text1.concat(" ", a);
	return result;
}
console.log('giveMeSomething("is better than nothing") ==> ', giveMeSomething("is better than nothing"));

//Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
	
    return num <= 0;
}
console.log('lessThanOrEqualToZero(5) ==>',lessThanOrEqualToZero(5)); // false
console.log('lessThanOrEqualToZero(0) ==>',lessThanOrEqualToZero(0)); // true
console.log('lessThanOrEqualToZero(-12) ==>',lessThanOrEqualToZero(-12)); // true


//Sum of Polygon Angles
function sumPolygon(n) {
	var polygon = (n-2) * 180;
    return polygon;
}
console.log('sumPolygon(3) ==> ',sumPolygon(6) )