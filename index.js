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
console.log(`Inserted "12" into the tree.`);
myTree.delete(7);
console.log(`Deleted "7" from the tree.`);
prettyPrint(myTree.root);
console.log(`Found "12" in the tree:`);
console.log(myTree.find(12));
console.log(myTree.levelOrder());
console.log(myTree.inOrder());
