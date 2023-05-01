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

	find(data, node = this.root) {
		if (data === node.data) {
			return node;
		} else if (data < node.data) {
			return this.find(data, node.left);
		} else if (data > node.data) {
			return this.find(data, node.right);
		}
	}

	//(level by level)
	levelOrder(mainMethod = null) {
		const queue = [this.root];
		const data = [];

		while (queue.length) {
			const node = queue.shift();
			data.push(node.data);

			if (mainMethod) {
				mainMethod(node);
			}

			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		if (!mainMethod) {
			return data;
		} else {
			return null;
		}
	}

	inOrder(node = this.root, mainMethod, result = []) {
		if (!this.root) {
			return [];
		}
		if (!node) {
			return;
		}
		this.inOrder(node.left, mainMethod, result);

		if (mainMethod) {
			mainMethod(node);
		} else {
			result.push(node.data);
		}
		this.inOrder(node.right, mainMethod, result);

		if (result) {
			return result;
		}
	}
	preOrder(node = this.root, mainMethod, result = []) {
		if (!this.root) {
			return [];
		}
		if (!node) {
			return;
		}
		if (mainMethod) {
			mainMethod(node);
		} else {
			result.push(node.data);
		}
		this.preOrder(node.left, mainMethod, result);
		this.preOrder(node.right, mainMethod, result);
		if (result) {
			return result;
		}
	}

	postOrder(node = this.root, mainMethod, result = []) {
		if (!this.root) {
			return [];
		}
		if (!node) {
			return;
		}
		this.postOrder(node.left, mainMethod, result);
		this.postOrder(node.right, mainMethod, result);
		if (mainMethod) {
			mainMethod(node);
		} else {
			result.push(node.data);
		}
		if (result) {
			return result;
		}
	}

	height(node = this.root) {
		if (!node) {
			return -1;
		}
		let leftHeight = this.height(node.left);
		let rightHeight = this.height(node.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}

	depth(node, root = this.root, level = 0) {
		if (!root) {
			return null;
		}

		if (root.key === node.key) {
			return level;
		}

		let count = this.depth(node, root.left, level + 1);
		if (count === null) {
			return this.depth(node, root.right, level + 1);
		} else {
			return count;
		}
	}

	isBalanced() {
		const checkBalance = (node) => {
			if (!node) {
				return true;
			}
			let leftHeight = this.height(node.left);
			let rightHeight = this.height(node.right);
			if (Math.abs(leftHeight - rightHeight) > 1) {
				return false;
			}
			return checkBalance(node.left) && checkBalance(node.right);
		};

		return checkBalance(this.root);
	}

	rebalance() {
		let currentTreeArray = this.inOrder();
		this.root = this.buildTree(currentTreeArray);
	}
}
