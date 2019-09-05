const action = process.argv[2];
const firstNum = process.argv[3] || 1;
const secondNum = process.argv[4] || 1;

const actions = {
	multiply(a, b) {
		return a * b;
	},
	divide(a, b) {
		return a / b;
	},
	add(a, b) {
		return Number(a) + Number(b);
	}		
};

const func = actions[action] || actions.multiply;
console.log(func(firstNum, secondNum));