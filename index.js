import createRandomArray from "./createRandomArray.js";
import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

const body = (document.querySelector("body").style.backgroundColor = "black"); // I like debugging in firefox and don't want to be flashbanged constantly.

// const myArray = createRandomArray();
const myArray = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// TESTING
const myTree = new Tree(myArray);
// console.log("Default Tree:");

myTree.insert(12);
myTree.delete(7);
prettyPrint(myTree.root);
console.log(myTree.find(12));
