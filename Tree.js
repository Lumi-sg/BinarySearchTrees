import Node from "./Node.js";

export default class Tree {
	constructor(array) {
		this.root = this.buildTree(array);
	}

	sortAndRemoveDuplicates(array) {
		const pruned = [...new Set(array)].sort((a, b) => a - b);
		return pruned;
	}

	buildTree(array) {
		let sorted = this.sortAndRemoveDuplicates(array);
		if (sorted.length === 0) {
			return null;
		}
		const middle = parseInt(sorted.length / 2);

		const root = new Node(
			sorted[middle], //ROOT
			this.buildTree(sorted.slice(0, middle)), //LEFT
			this.buildTree(sorted.slice(middle + 1)) //RIGHT
		);
		return root;
	}


	
}
