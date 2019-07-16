const { expect, should, assert } = require('chai');
const axios =  require('axios');
const {addNums} = require('./myfunc')

/// Describe is set of tests for one function.

describe('Tests for addNums', () => {
	// it is criteria that the function should pass.
	it('should return the sum', () => {
		const assertion = addNums(1, 1);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.equal(2);
	});

	// it is criteria that the function should pass.
	it('should retturn a number', () => {
		const assertion = addNums(1, 1);
		//Is an object with a bunch of tests that can be ran.
		expect(assertion).to.be.a('number');
	});

	// it is criteria that the function should pass.
	it('should return null if num1 or num2 is not a number', () => {
		const assertion = addNums('hello', 1);
		assert.equal(assertion, null);
	});
});

describe('Tests for async', () => {
	// it is criteria that the function should pass.
	it('should return the bulbasaur', () => {
        return axios.get('https://pokeapi.co/api/v2/pokemon/2')
        .then((assertion)=>{
             expect(assertion.data.name).to.equal('bulbasaur');
        })
		//Is an object with a bunch of tests that can be ran.
	});

});