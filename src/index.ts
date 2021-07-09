import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([10, 30, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollections("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
