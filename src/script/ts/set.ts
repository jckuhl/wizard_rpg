export class Set<T> {
    private values: T[] = [];
    
    constructor(array: T[] = []) {
        this.values = this.removeDuplicates(array);
    }

    private removeDuplicates<T>(array: T[]): T[] {
        const uniques: T[] = [];
        for(let i = 0; i < array.length; i++) {
            if(uniques.indexOf(array[i]) == -1) {
                uniques[i] = array[i];
            }
        }
        return uniques;
    }

    size(): number {
        return this.values.length;
    }

    get(index: number): T {
        if(index > this.values.length) {
            throw new Error("Array Index Out of Bounds");
        }
        return this.values[index];
    }

    add(value: T): void {
        if(this.values.indexOf(value) != -1) {
            this.values.push(value);
        }
    }

    remove(value: T) {
        this.values = this.values.filter((val:T)=> val != value);
    }

    has(value: T): boolean {
        for(let val of this.values) {
            if(val === value) return true;
        }
        return false;
    }

}