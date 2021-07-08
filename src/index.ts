import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([10, 30, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollections("Xaayb");
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
