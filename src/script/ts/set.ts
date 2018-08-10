export class Set {
    private values: any[] = [];
    constructor(array: any = []) {
        this.values = this.removeDuplicates(array);
    }

    private removeDuplicates(array: any[]): any[] {
        const uniques: any[] = [];
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

    get(index: number): any {
        return this.values[index];
    }

    add(value: any): void {
        if(this.values.indexOf(value) != -1) {
            this.values.push(value);
        }
    }

    remove(value: any) {
        this.values = this.values.filter(val=> val != value);
    }

    has(value: any): boolean {
        for(let val of this.values) {
            if(val == value) return true;
        }
        return false;
    }

}