import Vue from 'vue';
import Wizard from './../ts/wizard';
import { Potions, Potion } from './potion';

new Vue({
    el: '#app',
    data: {
        wizard: null,
        name: null,
        invalidName: true,
        startGame: false,
        history: '',
        archive: '',
        command: '',
    },
    computed: {
        availManaPots(): number {
            if(!this.wizard) return 0;
            return this.wizard.potHolder.potions.filter((potion: Potion)=> potion.name == 'mana').length;
        },
        availHealthPots() {

        }
    },
    methods: {
        validateName() {
            if(this.name.length >= 2) this.invalidName = false;
            else this.invalidName = true;
        },
        createWizard(event: Event) {
            event.preventDefault();
            this.wizard = new Wizard(this.name);
            this.startGame = true;
        },
        castSpell(spellname: string) {
            this.command = 'cast ' + spellname;
            this.recieveCommand();
        },
        recieveCommand() {
            const COMMANDS: any = {
                cast: (command: string) => this.history += this.wizard.cast(command),
                drink: (command: string) => this.history += this.wizard.potHolder.drinkPotion(command),
                clear: () => {
                        this.archive = this.history;
                        this.history = '';
                },
                archive: () => this.history = this.archive + this.history,
                default: () => this.history += `${this.wizard.name} does nothing\n`
            }

            const [ command, action ] = this.command.trim().toLowerCase().split(' ');
            if(command == '') {
                this.history += `${this.wizard.name} does nothing\n`;
            } else {
                if(COMMANDS[command]) {
                    COMMANDS[command](action);
                } else {
                    COMMANDS['default']();
                }
            }
        }
    }
})