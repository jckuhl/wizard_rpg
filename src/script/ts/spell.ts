import { ElementType } from "./elements";

export interface Spell {
    name: string;
    element: ElementType;
    spell: Function;
    manaCost: number;
    baseDamage: number;
    cooldown: number;
}