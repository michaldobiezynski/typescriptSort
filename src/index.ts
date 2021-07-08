import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollections";

const numberCollection = new NumbersCollection([10, 30, -5, 0]);

const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollections("Xaayb");

const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
