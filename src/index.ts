import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sorting Numbers Collection
const numbersCollection = new NumbersCollection([100, 10, 3, -5, 0, -12]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

// Sorting Characters Collection
const charactersCollection = new CharactersCollection('Xaayb');
// const sorterCharacters = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorterLinkedList = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
