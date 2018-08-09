import { ElementType } from "./elements";

export interface Spell {
    name: string;
    element: ElementType;
    spell: Function;
}