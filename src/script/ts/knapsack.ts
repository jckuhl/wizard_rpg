import { Item } from './item';

export class Knapsack {
    capacity: number;
    inventory: Item[];
    weight: number;

    constructor(capacity: number, inv: Item[]) {
        this.capacity = capacity;
        this.inventory = inv;
        this.weight = this.inventory.reduce((weight, itemB)=> weight + itemB.weight, 0);
    }

    addItem(item: Item): boolean {
        const tempWeight = this.weight + item.weight;
        if(tempWeight > this.capacity) {
            throw new Error("Backpack is too heavy!");
        } else {
            this.inventory.push(item);
            return true;
        }
    }

    removeItem(item: Item): Item {
        let index = this.inventory.indexOf(item);
        if(index === -1) 
            return null;
        else {
            const trash = this.inventory.splice(index)[0];
            this.weight -= trash.weight;
            return trash;
        }
    }
}