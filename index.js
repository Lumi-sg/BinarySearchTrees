import Tree from "./Tree.js";

const body = (document.querySelector("body").style.backgroundColor = "black");

const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};

// TESTING
let myArray = [1, 2, 3, 4, 5, 6, 7];
let testTree = new Tree(myArray);
console.table(testTree);
prettyPrint(testTree);
