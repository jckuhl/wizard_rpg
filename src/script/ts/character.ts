import { Spell } from "./spell";

export interface Character {
    name: string;
    health: number;
    mana: number;
    armor: number;
    critical: number;
    takeDamage(amt: number, spell: Spell): void;
}