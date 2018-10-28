import { Item } from "./item";
import Wizard from "./wizard";
import { Set } from "./set";

export interface Potion extends Item {
    drink: Function;
    index: number;
}

export class Potions {
    capacity: number;
    potions: Potion[] = [];
    indexes: Set<number>;
    user: Wizard;

    constructor(user: Wizard, capacity=3) {
        this.capacity = capacity;
        this.indexes = new Set();
        this.user = user;
    }

    addPotion(potion: Potion) {
        if(this.potions.length < this.capacity) {
            let random;
            do {
                random = Math.floor(Math.random() * 100000) + 1;
            } while(this.indexes.has(random))
            this.indexes.add(random);
            potion.index = random;
            this.potions.push(potion);
        }
    }

    drinkPotion(potionName: string): string {
        let potion = this.potions.filter(potion=> potion.name == potionName)[0];
        if(potion && this.potions.length > 0) {
            this.potions = this.potions.filter(pot=> pot.index != potion.index);
            return potion.drink();
        } else {
            return `${this.user.name} doesn\'t have any ${potionName} potions left!\n`;
        }
    }
}

export class ManaPot implements Potion {
    drink: Function;    
    weight: number;
    value: number;
    desc: string;
    name: string;
    index: number;

    constructor(user: Wizard) {
        this.name = 'mana';
        this.desc = 'restores mana';
        this.weight = 1;
        this.value = 15;
        this.drink = ()=> {
            user.restoreVitality(25, 'mana');
            return `${user.name} drinks a mana pot!\n${user.name} gains ${this.value} mana!\n`;
        }
    }
}

export class HealthPot implements Potion {
    drink: Function;    
    weight: number;
    value: number;
    desc: string;
    name: string;
    index: number;

    constructor(user: Wizard) {
        this.name = 'health';
        this.desc = 'restores health';
        this.weight = 1;
        this.value = 15;
        this.drink = ()=> {
            user.restoreVitality(25, 'health');
            return `${user.name} drinks a mana pot!\n${user.name} gains ${this.value} health!\n`;
        }
    }
}