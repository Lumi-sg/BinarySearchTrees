import createRandomArray from "./createRandomArray.js";
import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

const body = (document.querySelector("body").style.backgroundColor = "black"); // I like debugging in firefox and don't want to be flashbanged constantly.

// const myArray = createRandomArray();
const myArray = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// TESTING
const myTree = new Tree(myArray);
console.log("Default Tree:");
prettyPrint(myTree.root);
myTree.insert(12);
console.log("Tree after inserted value:");
prettyPrint(myTree.root);
myTree.delete(7);
console.log("Tree after deleted value:");
prettyPrint(myTree.root);
