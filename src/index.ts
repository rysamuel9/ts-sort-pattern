import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([100, 10, 3, -5, 0, -12]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
