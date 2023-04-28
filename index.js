import createRandomArray from "./createRandomArray.js";
import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

const body = (document.querySelector("body").style.backgroundColor = "black"); // I like debugging in firefox and don't want to be flashbanged constantly.

const myArray = createRandomArray();

// TESTING
const myTree = new Tree(myArray);
prettyPrint(myTree.root);
myTree.insert(5);
prettyPrint(myTree.root);
