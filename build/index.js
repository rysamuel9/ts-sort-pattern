"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Sorting Numbers Collection
const numbersCollection = new NumbersCollection_1.NumbersCollection([100, 10, 3, -5, 0, -12]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);
// Sorting Characters Collection
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
// const sorterCharacters = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorterLinkedList = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
