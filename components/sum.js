//Sum.js sums two numbers
'use strict';

function sum (a,b) {
	if(typeof a === 'number' && typeof b === 'number'){
		return a + b;
	}
	return null;
}

module.exports = sum;