'use strict';

jest.dontMock('../components/sum.js');

describe('sum', function() {
	it('adds two numbers', function() {
		var sum = require ('../components/sum.js');
		expect(sum(1,2)).toBe(3);
	});
	it('also concats two strings', function(){
		var sum = require ('../components/sum.js');
		expect(sum('Howard loves ','Amy')).toBe(null);
	});
});