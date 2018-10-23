const Calculator = require('../../src/Calculator');

describe('Calculator Test - Success Scenario', () =>{
		it('add test',() =>{
	    	expect(Calculator.add(1,3)).toBeGreaterThan(3);
		});

		it('sub test',() =>{
		    expect(Calculator.sub(1,3)).toBe(-2);
		});

		it('multi test',() =>{
		    expect(Calculator.multi(5,3)).toBeGreaterThan(10);
		});

		it('div test',() =>{
		    expect(Calculator.div(3,3)).toBeGreaterThan(0);
		});
});

describe('Calculator Test - Exception Scenario', () =>{
		it('add test',() =>{
	    	expect(() => {
	    		Calculator.add(-1,3)
	    	}).toThrow();
		});

		it('sub test',() =>{
		    expect(() => {
	    		Calculator.sub(1,-3)
	    	}).toThrow();
		});

		it('multi test',() =>{
		    expect(() => {
	    		Calculator.multi(-5,3)
	    	}).toThrow();
		});

		it('div test',() =>{
		    expect(() => {
	    		Calculator.div(3,-3)
	    	}).toThrow();
		});
});

