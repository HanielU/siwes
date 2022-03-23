type User = {
	firstname: string;
	lastname: string;
	workid: string;
	department: string;
	pcType: string;
	pcSerialCode: string;
	allottedCode(): string;
	fullName(): string;
	fullSerialCode(): string;
};
class Person {
	private allottedCode: string;
	constructor(
		firstname: string,
		lastname: string,
		workId: string | null,
		department: string | null,
		pcType: string,
		pcSerialCode: string
	) {}
}

const operations: Pick<User, 'fullName' | 'fullSerialCode'> = {
	fullName() {
		return `${this.firstname} ${this.lastname}`;
	},
	fullSerialCode() {
		return `${this.pcType} ${this.pcSerialCode}`;
	}
};

const value = createObj({
	firstname: 'Haniel',
	lastname: 'Ubogu',
	workid: null,
	department: 'I.T.D',
	pcType: 'HP',
	pcSerialCode: '6CSEP11BB8T2R3'
});

// const person1 = new Person("Haniel", "Ubogu", null, "I");
// const person1: User = Object.create(operations, value);
const person1 = createUser({
	firstname: 'Haniel',
	lastname: 'Ubogu',
	workid: null,
	department: 'I.T.D',
	pcType: 'HP',
	pcSerialCode: '6CSEP11BB8T2R3'
});

console.log(person1.fullName());
console.log(person1.fullSerialCode());

function createUser(object: Omit<User, 'fullName' | 'fullSerialCode' | 'allottedCode'>): User {
	return {
		...object,
		allottedCode() {
			return '1111';
		},
		fullName() {
			return `${this.firstname} ${this.lastname}`;
		},
		fullSerialCode() {
			return `${this.pcType} ${this.pcSerialCode}`;
		}
	};
}

// useful to create the second
function createObj(object: { [key: string]: any }) {
	const obj: { [key: string]: { value: any } } = {};
	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			const element = object[key];
			obj[key] = { value: element };
		}
	}
	return obj;
}

/* {
	firstname: "Haniel",
	lastname: "Ubogu",
	
	workid: null,
	department: "I.T.D",
	pcType: "HP",
	pcSerialCode: "",
	
} */
export const dic = '';
