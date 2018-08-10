import { Character } from "./character";
import { ElementType } from "./elements";
import { Spell } from "./spell"
import { Knapsack } from "./knapsack";
import { Potions, ManaPot } from "./potion";

export default class Wizard implements Character {
    
    name: string;
    health: number; 
    maxHealth: number;   
    mana: number;
    maxMana: number;
    armor: number;
    critical: number;
    spellbook: Spell[] = [];
    target: Character;
    inventory: Knapsack;
    potHolder: Potions;

    constructor(name: string, health=100, mana=100) {
        this.name = name.slice(0,1).toUpperCase() + name.slice(1);
        this.health = health;
        this.maxHealth = health;
        this.mana = mana;
        this.maxMana = mana;

        this.critical = 10;

        this.inventory = new Knapsack(20,[]);

        this.spellbook.push({
            name: 'fireball',
            element: ElementType.FIRE,
            spell: ()=> `${this.name} casts fireball!\n`,
            manaCost: 30,
            baseDamage: 30,
            cooldown: 1
        });

        this.potHolder = new Potions(this);
        this.potHolder.addPotion(new ManaPot(this));
        console.log(this.potHolder);
        console.log(this.potHolder.potions.length);
    }

    cast(spellname: string): string {
        let spell = this.spellbook.filter(spell=> spell.name == spellname)[0];
        if(spell) {
            if(this.mana - spell.manaCost >= 0) {
                this.mana -= spell.manaCost;
                let result = '';
                if(this.target) {
                    let random = Math.floor(Math.random() * 100) + 1;
                    let damage = random < this.critical ? spell.baseDamage * 2 : spell.baseDamage;
                    this.target.takeDamage(damage, spell);
                    if(random < this.critical) result = `${this.name} scored a critical hit!\n`;
                }
                return (result + spell.spell());
            } else {
                return `${this.name} doesn't have enough mana!\n`;
            }
        } else {
            return `${this.name} doesn't know that spell!\n`;
        }
    }

    takeDamage(amt: number, spell: Spell): void {
        throw new Error("Method not implemented.");
    }

    restoreVitality(amt: number, type: string) {
        switch(type) {
            case 'mana':
                if(this.mana + amt <= this.maxMana) this.mana += amt;
                else this.mana = this.maxMana;
            case 'health':
                if(this.health + amt <= this.maxHealth) this.health += amt;
                else this.health = this.maxHealth;
        }
    }

}