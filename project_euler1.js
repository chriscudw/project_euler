
/* With an array. This is a mess because it prints the sum
each time it adds another 3 or 5 (my first idea--I had to
look up the 'push' to array) */
var array = [];

for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
    	array.push(i);  
    }
}

var total = 0;

for (var i = 0; i < array.length; i++) {
    total += array[i];
    console.log(total);
}


// Without a function
var sum = 0;

for (var i = 1; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
}
console.log(sum);


// Finally with a function!
var sum1 = 0;

var euler1 = function(max) {

for (var i = 1; i < max; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum1 += i;
	}
}
return sum1;
};
euler1(1000);