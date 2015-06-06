//Find largest prime factor of a number
var primeFactor = function(number) {
	var i = 2;
	while(i<number) {
		if(number % i === 0 && number/i !== 1) {
			number = number/i;
		} else { i++; 
		}
	}
	return number;
};
primeFactor(10000);