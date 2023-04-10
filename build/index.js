"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
// Sorting Numbers Collection
const numbersCollection = new NumbersCollection_1.NumbersCollection([100, 10, 3, -5, 0, -12]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
// Sorting Characters Collection
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorterCharacters = new Sorter_1.Sorter(charactersCollection);
sorterCharacters.sort();
console.log(charactersCollection.data);
