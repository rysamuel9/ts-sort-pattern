import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// Sorting Numbers Collection
const numbersCollection = new NumbersCollection([100, 10, 3, -5, 0, -12]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

// Sorting Characters Collection
const charactersCollection = new CharactersCollection('Xaayb');
const sorterCharacters = new Sorter(charactersCollection);
sorterCharacters.sort();
console.log(charactersCollection.data);
