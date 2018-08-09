import { Character } from "./character";
import { ElementType } from "./elements";
import { Spell } from "./spell"
import { Knapsack } from "./knapsack";

export default class Wizard implements Character {
    name: string;
    health: number;    
    mana: number;
    armor: number;
    spellbook: Spell[];
    target: Character;
    inventory: Knapsack;

    constructor(name: string, health=100, mana=100) {
        this.name = name;
        this.health = health;
        this.mana = mana;

        this.inventory = new Knapsack(20,[]);

        this.spellbook.push({
            name: 'fireball',
            element: ElementType.FIRE,
            spell: ()=> console.log('casting fireball!')
        });
    }

    cast(spellname: string) {
        this.spellbook.filter(spell=> spell.name == spellname)[0].spell();
    }

}