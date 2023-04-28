export default function createRandomArray() {
	const arrayLength = Math.floor(Math.random() * 16) + 5;
	const array = [];

	for (let i = 1; i < arrayLength; i++) {
		const randomValue = Math.floor(Math.random() * 101);
		array.push(randomValue);
	}

	return array;
}
