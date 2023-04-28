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

	insert(data, node = this.root) {
		if (!node) {
			node = new Node(data);
			return node;
		} else if (data < node.data) {
			node.left = this.insert(data, node.left);
		} else if (data > node.data) {
			node.right = this.insert(data, node.right);
		}
		return node;
	}

	delete(data, node = this.root) {
		if (!node) {
			return node;
		}
		if (data < node.data) {
			node.left = this.delete(data, node.left);
		} else if (data > node.data) {
			node.right = this.delete(data, node.right);
		} else {
			//I am here only
			if (!node.left) {
				return node.right;
			} else if (!node.right) {
				return node.left;
			}
			//any nodes past this point have two children
			node.data = this.minimumValue(node.right);
			node.right = this.delete(node.data, node.right);
		}
		return node;
	}
	minimumValue(node) {
		let minimum = node.data;
		while (node.left) {
			minimum = node.left.data;
			node = node.left;
		}
		return minimum;
	}
}
